import { Observable } from 'rxjs';
import {SubjectEntityResult } from '../../entity/subject-entity';


export abstract class GetSubjects {
  abstract getSubject(): Observable<SubjectEntityResult>;
}
