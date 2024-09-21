import { Component } from '@angular/core';
import { getSubjectUseCase } from '../../../domain/usecase/getSubject-usecase';
import { SubjectModel } from '../../../domain/model/subject.model';
import { TermImplementationRepository } from '../../../data/repository/terms-implementation.repository';
import { Term } from '../../../data/entity/term';

@Component({
  selector: 'app-student-subject',
  templateUrl: './student-subject.component.html',
  styleUrls: ['./student-subject.component.css']
})
export class StudentSubjectComponent {
  Subjects !: SubjectModel[];
  Terms !: Term[];
  selectedTerm :any;
  constructor(private getSubjectUseCase: getSubjectUseCase,private getTermsRepository : TermImplementationRepository) { }
  ngOnInit() {
    this.getSubject()
    this.getTerms()
  }

  getSubject() {
    var response = this.getSubjectUseCase.execute();
    response.subscribe(
      (value) =>this.Subjects= value.value,
      (error) => console.error(error),
      () => console.log('Completed')
    );
  }
  getTerms() {
    var response = this.getTermsRepository.getTerms();
    response.subscribe(
      (value) =>this.Terms = value,
      (error) => console.error(error),
      () => console.log('Completed')
    );
  }
  selectTerm(){
    console.log(this.selectedTerm.id);
  }
}
