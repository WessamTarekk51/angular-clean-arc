import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SubjectRoutingModule } from './Student-routing.module';
import { StudentSubjectComponent } from './home-screen/presentation/home/student-subject/student-subject.component';

@NgModule({
  declarations: [StudentSubjectComponent],
  imports: [CommonModule, SubjectRoutingModule],
})
export class SubjectModule {}
