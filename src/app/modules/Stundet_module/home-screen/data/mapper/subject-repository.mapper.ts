import { Mapper } from 'src/app/core/base/utils/mapper';
import { SubjectModel } from '../../domain/model/subject.model';
import { SubjectEntity } from '../entity/subject-entity';

export class SubjectImplementationRepositoryMapper extends Mapper<
  SubjectEntity,
  SubjectModel
> {
  mapFrom(param: SubjectEntity): SubjectModel {
    return {
      id: param.id,
      name: param.name,
      backgroundImage: param.backgroundImage,
      icon: param.icon,
      term: param.term,
      teacherGuide: param.teacherGuide,
      numeral: param.numeral,
      isSubscribed: param.isSubscribed,
    };
  }
  mapTo(param: SubjectModel): SubjectEntity {
    return {
      id: param.id,
      name: param.name,
      backgroundImage: param.backgroundImage,
      icon: param.icon,
      term: param.term,
      teacherGuide: param.teacherGuide,
      numeral: param.numeral,
      isSubscribed: param.isSubscribed,
    };
  }
}
