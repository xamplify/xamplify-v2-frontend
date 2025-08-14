import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GlobalErrorService } from '../services/global-error.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector, private ngZone: NgZone) {}

  handleError(error: any): void {
    // Log to console
    console.error('Global Error:', error);

    // Optionally send to remote logging infrastructure
    // this.logErrorToServer(error);

    // Show user-friendly message
    const toastr = this.injector.get(ToastrService, null);
    const globalErrorService = this.injector.get(GlobalErrorService, null);
    if (toastr) {
      this.ngZone.run(() => {
        toastr.error('An unexpected error occurred. Please try again later.', 'Error', { timeOut: 5000 });
      });
    }
    if (globalErrorService) {
      this.ngZone.run(() => {
        globalErrorService.setError(error);
      });
    }
  }

  // private logErrorToServer(error: any) {
  //   // Implement remote logging here (Sentry, LogRocket, etc.)
  // }
}
