import { Observable } from 'rxjs';
import { UserEntity } from '../../entity/uers-entity';

export abstract class LoginLocalDataSource {
  abstract login(params: {
    username: string;
    password: string;
  }): Observable<UserEntity>;
}
