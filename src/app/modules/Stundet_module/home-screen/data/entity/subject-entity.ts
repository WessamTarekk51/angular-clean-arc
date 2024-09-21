import { IResult } from "./IResult";

export interface SubjectEntity {
  id: string;
  name: string;
  backgroundImage: string;
  icon: string;
  term:number;
  teacherGuide: string;
  numeral: string;
  isSubscribed: boolean;
}
export interface SubjectEntityResult extends IResult {
  value: SubjectEntity[]
}
