import { Observable } from 'rxjs';
import { BaseUseCase } from 'src/app/core/base/usecase/base-usecase';
import { UserModel } from '../model/user.model';
import { UserRepository } from '../repository/user_repository';
export class UserLoginUseCase
  implements BaseUseCase<{ username: string; password: string }, UserModel>
{
  constructor(private userRepository: UserRepository) {}
  execute(params: {
    username: string;
    password: string;
  }): Observable<UserModel> {
    return this.userRepository.login(params);
  }
}
