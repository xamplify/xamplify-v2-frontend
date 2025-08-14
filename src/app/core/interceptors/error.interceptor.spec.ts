import { TestBed } from '@angular/core/testing';
import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { errorInterceptor } from './error.interceptor';
import { ToastrService } from 'ngx-toastr';
import { LoggerService } from '../services/logger.service';

describe('errorInterceptor', () => {
  let toastr: jasmine.SpyObj<ToastrService>;
  let logger: jasmine.SpyObj<LoggerService>;

  beforeEach(() => {
    toastr = jasmine.createSpyObj('ToastrService', ['error']);
    logger = jasmine.createSpyObj('LoggerService', ['error']);
    TestBed.configureTestingModule({
      providers: [
        { provide: ToastrService, useValue: toastr },
        { provide: LoggerService, useValue: logger },
      ],
    });
  });

  it('should log and show toast on HTTP error', (done) => {
    const req = new HttpRequest('GET', '/test');
    const next: HttpHandler = {
      handle: () => throwError(() => new HttpErrorResponse({ status: 500, statusText: 'Server Error', error: { message: 'fail' } }))
    };
    errorInterceptor(req, next.handle.bind(next)).subscribe({
      error: (err) => {
        expect(logger.error).toHaveBeenCalled();
        expect(toastr.error).toHaveBeenCalled();
        done();
      }
    });
  });
});
