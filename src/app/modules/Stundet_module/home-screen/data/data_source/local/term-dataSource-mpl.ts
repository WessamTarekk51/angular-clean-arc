
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetTerms} from './term-dataSource';
import { Observable,of  } from 'rxjs';
import { Term } from '../../entity/term';
@Injectable({
  providedIn: 'root',
})
export class GetTermsImpl extends GetTerms {
  constructor() {
    super();
  }

  getTerms(): Observable<Term[]>{
    let data : Term[] = [
      {
        id: 1,
        name: 'الفصل الدراسي الاول',
      },
      {
        id: 2,
        name: 'الفصل الدراسي الثاني',
      },
    ];
    console.log(data);
    return of (data);
  }
}
