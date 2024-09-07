import { Observable } from 'rxjs';
import { SubjectModel } from '../model/subject.model';

export abstract class SubjectRepository {
  abstract getSubject(): Observable<SubjectModel>;
  
}
