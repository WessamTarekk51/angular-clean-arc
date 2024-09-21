import { Observable } from 'rxjs';
import { Term } from '../../entity/term';


export abstract class GetTerms {
  abstract getTerms(): Observable<Term[]>;
}
