import { Mapper } from 'src/app/core/base/utils/mapper';
import { SubjectModel, SubjectModelResult } from '../../domain/model/subject.model';
import { SubjectEntityResult, SubjectEntity } from '../entity/subject-entity';

export class SubjectImplementationRepositoryMapper extends Mapper<
SubjectEntityResult,
SubjectModelResult
> {
  mapFrom(param: SubjectEntityResult): SubjectModelResult {
    console.log(param)
    return {
      value: param.value,
      errorCode: param.errorCode,
      errorMessage: param.errorMessage,
      isExceptionOccurred: param.isExceptionOccurred,
      isSuccess: param.isSuccess,
      resultType: param.resultType,
      errorDetails: param.errorDetails
    };
  }
  mapTo(param: SubjectModelResult): SubjectEntityResult {
    return {
      value: param.value,
      errorCode: param.errorCode,
      errorMessage: param.errorMessage,
      isExceptionOccurred: param.isExceptionOccurred,
      isSuccess: param.isSuccess,
      resultType: param.resultType,
      errorDetails: param.errorDetails
    };
  }
}
