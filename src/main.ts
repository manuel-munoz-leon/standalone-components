import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ROUTES } from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), provideHttpClient(), provideRouter(ROUTES)],
}).catch((err) => console.error(err));
