import { delay, Observable, of } from 'rxjs';
import { UserEntity } from '../../entity/uers-entity';
import { LoginLocalDataSource } from './login-local-datasource';

export class LoginLocalDataSourceImpl extends LoginLocalDataSource {
  constructor() {
    super();
  }

  override login(params: {
    username: string;
    password: string;
  }): Observable<UserEntity> {
    delay(1000);
    var modal = <UserEntity>{
      id: '5465',
      name: 'asasas',
      activationStatus: false,
      phoneNumber: '455',
      userName: 'mostafa',
      userPicture: 'aaaaa',
    };
    return of(modal);
  }
}
