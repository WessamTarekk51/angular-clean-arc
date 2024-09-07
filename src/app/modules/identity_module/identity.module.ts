import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IdentityRoutingModule } from './identity-routing.module';
import { LoginScreenComponent } from './login-screen/presentation/screen/login-screen.component';

@NgModule({
  declarations: [LoginScreenComponent],
  imports: [CommonModule, IdentityRoutingModule],
})
export class IdentityModule {}
