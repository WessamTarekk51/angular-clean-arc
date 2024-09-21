import { Observable } from 'rxjs';
import { SubjectModelResult } from '../model/subject.model';

export abstract class SubjectByTermRepository {
  abstract getSubjectByTerm(params: {
    id: number;
  }): Observable<SubjectModelResult>;
}
