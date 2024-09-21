import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLocalDataSource } from './modules/identity_module/login-screen/data/data_source/local/login-local-datasource';
import { LoginLocalDataSourceImpl } from './modules/identity_module/login-screen/data/data_source/local/login-local-datasource-impl';
import { LoginRemoteDataSource } from './modules/identity_module/login-screen/data/data_source/remote/login-remote-dataSource';
import { LoginRemoteDataSourceImpl } from './modules/identity_module/login-screen/data/data_source/remote/login-remote-dataSource-impl';
import { UserImplementationRepository } from './modules/identity_module/login-screen/data/repository/user-implementation.repository';
import { UserRepository } from './modules/identity_module/login-screen/domain/repository/user_repository';
import { UserLoginUseCase } from './modules/identity_module/login-screen/domain/usecase/login-usecase';
import { StudentSubjectComponent } from './modules/Stundet_module/home-screen/presentation/home/student-subject/student-subject.component';
import { GetSubjects } from './modules/Stundet_module/home-screen/data/data_source/remote/student-subjects-dataSource';
import { GetSubjectsImpl } from './modules/Stundet_module/home-screen/data/data_source/remote/student-subjects-dataSource-mpl';
import { SubjectImplementationRepository } from './modules/Stundet_module/home-screen/data/repository/subject-implementation.repository';
import { SubjectRepository } from './modules/Stundet_module/home-screen/domain/repository/subject_repository';
import { getSubjectUseCase } from './modules/Stundet_module/home-screen/domain/usecase/getSubject-usecase';
import { GetTermsImpl } from './modules/Stundet_module/home-screen/data/data_source/local/term-dataSource-mpl';
import { GetTerms } from './modules/Stundet_module/home-screen/data/data_source/local/term-dataSource';

const userLoginUseCaseFactory = (userRepo: UserRepository) =>
  new UserLoginUseCase(userRepo);

const subjectUseCaseFactory = (subjectRepo: SubjectRepository) =>
  new getSubjectUseCase(subjectRepo);

export const userLoginUseCaseProvider = {
  provide: UserLoginUseCase,
  useFactory: userLoginUseCaseFactory,
  deps: [UserRepository],
};
export const getSubjectUseCaseProvider = {
  provide: getSubjectUseCase,
  useFactory: subjectUseCaseFactory,
  deps: [SubjectRepository],
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,BrowserAnimationsModule],
  providers: [
    userLoginUseCaseProvider,
    getSubjectUseCaseProvider,
    BrowserAnimationsModule,

    // userImplementationRepositoryProvider,
    { provide: UserRepository, useClass: UserImplementationRepository },
    { provide: LoginRemoteDataSource, useClass: LoginRemoteDataSourceImpl },
    { provide: LoginLocalDataSource, useClass: LoginLocalDataSourceImpl },
    { provide: GetSubjects, useClass: GetSubjectsImpl },
    { provide: SubjectRepository, useClass: SubjectImplementationRepository },
    { provide: GetTerms, useClass: GetTermsImpl },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
