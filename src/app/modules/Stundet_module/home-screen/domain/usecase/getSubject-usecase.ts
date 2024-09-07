import { Observable } from 'rxjs';
import { BaseUseCase } from 'src/app/core/base/usecase/base-usecase';
import { SubjectModel } from '../model/subject.model';
import { SubjectRepository } from '../repository/subject_repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class getSubjectUseCase
  implements BaseUseCase<{}, SubjectModel>
{
  constructor(private SubjectRepository: SubjectRepository) {}
  execute(): Observable<SubjectModel> {
    return this.SubjectRepository.getSubject();
  }
}
