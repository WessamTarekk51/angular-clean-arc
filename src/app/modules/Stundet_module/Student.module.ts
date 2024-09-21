import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SubjectRoutingModule } from './Student-routing.module';
import { StudentSubjectComponent } from './home-screen/presentation/home/student-subject/student-subject.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentSubjectComponent],
  imports: [CommonModule, FormsModule,SubjectRoutingModule,DropdownModule],
})
export class SubjectModule {}
