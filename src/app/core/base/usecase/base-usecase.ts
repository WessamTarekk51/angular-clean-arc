import { Observable } from 'rxjs';
export interface BaseUseCase<S, T> {
  execute(params: S): Observable<T>;
}
