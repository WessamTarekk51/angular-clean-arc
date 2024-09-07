import { Component } from '@angular/core';
import { UserLoginUseCase } from '../../domain/usecase/login-usecase';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent {
  constructor(private loginUseCase: UserLoginUseCase) {}

  loginAsync(username: string, password: string) {
    alert('user name collected : ' + username);
    var response = this.loginUseCase.execute({
      username: username,
      password: password,
    });
    response.subscribe(
      (value) => console.log(value),
      (error) => console.error(error),
      () => console.log('Completed')
    );
  }
}
