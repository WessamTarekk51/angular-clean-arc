import { Component } from '@angular/core';
import { getSubjectUseCase } from '../../../domain/usecase/getSubject-usecase';

@Component({
  selector: 'app-student-subject',
  templateUrl: './student-subject.component.html',
  styleUrls: ['./student-subject.component.css']
})
export class StudentSubjectComponent {
  constructor(private getSubjectUseCase: getSubjectUseCase) { }
  ngOnInit() {
    this.getSubject()
  }

  getSubject() {
    var response = this.getSubjectUseCase.execute();
    console.log(response)
    response.subscribe(
      (value) => console.log(value),
      (error) => console.error(error),
      () => console.log('Completed')
    );
  }
}
