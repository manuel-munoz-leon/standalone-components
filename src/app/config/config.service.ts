import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
import { Config } from './config';
import { BehaviorSubject } from 'rxjs';

export type AppConfig = {
  isServed: boolean;
  posterImg: string;
  isExternal?: boolean;
  theme: string;
  withError?: boolean;
  apiUrl: string;
  secret: string;
  extraKeys: string;
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configSub = new BehaviorSubject<AppConfig>(Config);
  config$: Observable<AppConfig> = this.configSub.asObservable();

  private static _config: AppConfig;
  static get Config(): AppConfig {
    return this._config || Config;
  }

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<boolean> {
    return this.http.get<AppConfig>(environment.configUrl).pipe(
      map((response) => {
        this.createConfig(response, false);
        console.warn('success', environment.configUrl);
        return true;
      }),
      catchError((error) => {
        // if in error, return set fall back from environment
        console.warn('Error loading config ', error);
        return of(false);
      })
    );
  }

  createConfig(config: unknown, errors: boolean): void {
    const _config = { ...Config, ...(<AppConfig>config) };
    _config.isServed = true;
    _config.withError = errors;
    ConfigService._config = _config;
    this.configSub.next(_config);
  }
}
