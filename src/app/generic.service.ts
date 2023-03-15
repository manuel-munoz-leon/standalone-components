import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor(private http: HttpClient) {}

  fetchData<T>(api: string): Observable<T> {
    return this.http.get<T>(api).pipe(
      catchError((error) => {
        console.warn(`Error in api url due ${error}`);
        return EMPTY;
      })
    );
  }

  isAuthorized(): Observable<boolean> {
    return of(true);
  }
}
