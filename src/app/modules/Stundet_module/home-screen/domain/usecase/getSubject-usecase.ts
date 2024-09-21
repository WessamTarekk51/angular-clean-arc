import { Observable } from 'rxjs';
import { BaseUseCase } from 'src/app/core/base/usecase/base-usecase';
import { SubjectModel, SubjectModelResult } from '../model/subject.model';
import { SubjectRepository } from '../repository/subject_repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class getSubjectUseCase
  implements BaseUseCase<{}, SubjectModelResult>
{
  constructor(private SubjectRepository: SubjectRepository) {}
  execute(): Observable<SubjectModelResult> {
    return this.SubjectRepository.getSubject();
  }
  
}
