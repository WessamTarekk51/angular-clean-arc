import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubjectEntityResult, SubjectEntity } from '../../entity/subject-entity';
import { GetSubjects } from './student-subjects-dataSource';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GetSubjectsImpl extends GetSubjects {
  constructor(private http: HttpClient) {
    super();
  }

   getSubject(): Observable<SubjectEntityResult> {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjA0MjNkMS1lZGE3LTQ2MGEtYWE4Mi0zMzJlNDIwMTZlOGYiLCJqdGkiOiI5NDkzNjI0OS04N2YyLTQ0OTMtOTIyYi0xNWY3OTkwNDBlMjQiLCJuYmYiOjE3MjU3MTQ4MTYsImV4cCI6MTczMDg5ODgxNiwiaXNzIjoiU1RJZGVudGl0eVNlcnZpY2VQcm92aWRlciIsImF1ZCI6IlNUSWRlbnRpdHlDb25zdW1lciJ9.-9TYqsztRk9hK8nFCRpXsXu-4Ito0Kf6-M56mlsJbzw"
    );
    let data = this.http.get<SubjectEntityResult>('https://webgateway.selaheltelmeez.com/Curriculum/GetStudentSubjects', { headers: header });
    console.log(data)
    return data
  }
}
