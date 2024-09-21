import { Injectable } from '@angular/core';
import { GetTerms } from '../data_source/local/term-dataSource';

@Injectable({
  providedIn: 'root',
})
export class TermImplementationRepository{
  constructor(
    private local: GetTerms,
  ) {
  }
 
  getTerms(){
    return this.local.getTerms();
  }
}
