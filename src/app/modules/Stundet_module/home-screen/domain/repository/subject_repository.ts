import { Observable } from 'rxjs';
import { SubjectModelResult } from '../model/subject.model';

export abstract class SubjectRepository {
  abstract getSubject(): Observable<SubjectModelResult>;

}
