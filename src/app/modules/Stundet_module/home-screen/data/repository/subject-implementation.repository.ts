import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubjectModel, SubjectModelResult } from '../../domain/model/subject.model';
import { SubjectRepository } from '../../domain/repository/subject_repository';
import { GetSubjects } from '../data_source/remote/student-subjects-dataSource';
import { SubjectImplementationRepositoryMapper } from '../mapper/subject-repository.mapper';
import { SubjectEntity } from '../entity/subject-entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubjectImplementationRepository extends SubjectRepository{
  subjectMapper = new SubjectImplementationRepositoryMapper();
  constructor(
    private remote: GetSubjects,
    private http: HttpClient
  ) {
    super();
  }
  getSubject(): Observable<SubjectModelResult> {
    return this.remote.getSubject().pipe(map(this.subjectMapper.mapTo));
  }
 
}
