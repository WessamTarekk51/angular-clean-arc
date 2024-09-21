export interface IResult {
    errorCode: string;
    errorMessage: string;
    isExceptionOccurred: boolean;
    isSuccess: boolean;
    resultType: number;
    errorDetails: ErrorDetails;
  
  }
  
  export interface IBoolenResult extends IResult {
    value: boolean;
  }

  interface ErrorDetails {
    additionalProp1: string[];
    additionalProp2: string[];
    additionalProp3: string[];
  }
  