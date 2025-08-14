import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoggerService } from '../services/logger.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);
  const logger = inject(LoggerService);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      logger.error('HTTP error:', err.status, err.message, err);
      try {
        toastr?.error(err?.error?.message || 'An unexpected error occurred', `Error ${err.status}`, { timeOut: 5000 });
      } catch {}
      return throwError(() => err);
    })
  );
};
