import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'identity',
    loadChildren: () =>
      import('./modules/identity_module/identity.module').then(
        (m) => m.IdentityModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/Stundet_module/Student.module').then(
        (m) => m.SubjectModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
