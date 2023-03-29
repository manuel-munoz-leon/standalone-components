import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs/internal/AsyncSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  cache: any = {};

  getResource(url: string): Observable<any> {
    if (!this.cache[url]) {
      this.cache[url] = new AsyncSubject();
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.cache[url].next(data);
          this.cache[url].complete();
        });
    }

    return this.cache[url].asObservable();
  }
}
