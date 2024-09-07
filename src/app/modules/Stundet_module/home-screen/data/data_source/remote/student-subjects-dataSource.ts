import { Observable } from 'rxjs';
import {SubjectEntity } from '../../entity/subject-entity';
import { Injectable } from '@angular/core';


export abstract class GetSubjects {
  abstract getSubject(): Observable<SubjectEntity>;
}
