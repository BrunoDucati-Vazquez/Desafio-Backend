import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import HttpClientModule
import { provideHttpClient } from '@angular/common/http'; // ✅ Import provideHttpClient


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
