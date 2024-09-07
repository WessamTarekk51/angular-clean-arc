import { Observable } from 'rxjs';
import { UserEntity } from '../../entity/uers-entity';
import { Injectable } from '@angular/core';


export abstract class LoginRemoteDataSource {
  abstract login(params: {
    username: string;
    password: string;
  }): Observable<UserEntity>;
}
