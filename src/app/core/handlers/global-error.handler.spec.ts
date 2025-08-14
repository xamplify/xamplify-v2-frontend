import { ErrorHandler, Injector, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { LoggerService } from '../core/services/logger.service';

describe('GlobalErrorHandler', () => {
  let handler: ErrorHandler;
  let toastr: jasmine.SpyObj<ToastrService>;
  let logger: jasmine.SpyObj<LoggerService>;
  let ngZone: NgZone;
  let injector: Injector;

  beforeEach(() => {
    toastr = jasmine.createSpyObj('ToastrService', ['error']);
    logger = jasmine.createSpyObj('LoggerService', ['error']);
    ngZone = { run: (fn: any) => fn() } as NgZone;
    injector = {
      get: (token: any) => {
        if (token === ToastrService) return toastr;
        if (token === LoggerService) return logger;
        return null;
      }
    } as Injector;
    handler = new (class extends ErrorHandler {
      constructor() { super(); }
      handleError(error: any): void {
        logger.error('Global Error:', error);
        ngZone.run(() => toastr.error('An unexpected error occurred. Please try again later.', 'Error', { timeOut: 5000 }));
      }
    })();
  });

  it('should log and show toast on error', () => {
    handler.handleError(new Error('Test error'));
    expect(logger.error).toHaveBeenCalled();
    expect(toastr.error).toHaveBeenCalled();
  });
});
