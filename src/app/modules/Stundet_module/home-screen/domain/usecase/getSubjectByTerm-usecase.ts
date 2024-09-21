import { Observable } from 'rxjs';
import { BaseUseCase } from 'src/app/core/base/usecase/base-usecase';
import { SubjectModel, SubjectModelResult } from '../model/subject.model';
import { SubjectRepository } from '../repository/subject_repository';
import { Injectable } from '@angular/core';
import { SubjectByTermRepository } from '../repository/subjectByTerm_repository';

@Injectable({
  providedIn: 'root',
})
export class getSubjectByTermUseCase
  implements BaseUseCase<{}, SubjectModelResult>
{
  constructor(private SubjectByTermRepository: SubjectByTermRepository) {}

  execute(params: {
    id: number;
  }): Observable<SubjectModelResult> {
    // let data = this.SubjectByTermRepository.getSubjectByTerm(params)
    
    return this.SubjectByTermRepository.getSubjectByTerm(params);
  }
}
