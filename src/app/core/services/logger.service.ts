import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(message: any, ...optionalParams: any[]) {
    if (!environment.production) {
      console.log(message, ...optionalParams);
    }
  }

  error(message: any, ...optionalParams: any[]) {
    // Optionally send to remote server
    if (!environment.production) {
      console.error(message, ...optionalParams);
    }
    // Add remote logging here for prod if needed
  }

  warn(message: any, ...optionalParams: any[]) {
    if (!environment.production) {
      console.warn(message, ...optionalParams);
    }
  }
}
