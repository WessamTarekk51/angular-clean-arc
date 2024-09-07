import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../../domain/model/user.model';
import { UserRepository } from '../../domain/repository/user_repository';
import { LoginLocalDataSource } from '../data_source/local/login-local-datasource';
import { LoginRemoteDataSource } from '../data_source/remote/login-remote-dataSource';
import { UserImplementationRepositoryMapper } from '../mapper/user-repository.mapper';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();
  constructor(
    private remote: LoginRemoteDataSource,
    private local: LoginLocalDataSource
  ) {
    super();
  }
  login(params: { username: string; password: string }): Observable<UserModel> {
    // return this.http
    //   .post<UserEntity>('https://example.com/login', { params })
    //   .pipe(map(this.userMapper.mapFrom));
    return this.local.login(params).pipe(map(this.userMapper.mapFrom));
  }
}
