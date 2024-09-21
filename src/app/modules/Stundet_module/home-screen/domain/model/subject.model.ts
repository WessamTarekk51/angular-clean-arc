import { IResult } from "./IResult";

export interface SubjectModel {
  id: string;
  name: string;
  backgroundImage: string;
  icon: string;
  term:number;
  teacherGuide: string;
  numeral: string;
  isSubscribed: boolean;
}
export interface SubjectModelResult extends IResult {
  value: SubjectModel[]
}
