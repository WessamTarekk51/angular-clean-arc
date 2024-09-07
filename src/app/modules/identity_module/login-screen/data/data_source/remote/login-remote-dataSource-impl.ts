import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { UserEntity } from '../../entity/uers-entity';
import { LoginRemoteDataSource } from './login-remote-dataSource';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginRemoteDataSourceImpl extends LoginRemoteDataSource {
  constructor(private http: HttpClient) {
    super();
  }

  override login(params: {
    username: string;
    password: string;
  }): Observable<UserEntity> {
    return this.http.post<UserEntity>('https://example.com/login', { params });
  }
}
