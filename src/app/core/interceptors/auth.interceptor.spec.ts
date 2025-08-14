import { TestBed } from '@angular/core/testing';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { of } from 'rxjs';
import { authInterceptor } from './auth.interceptor';

describe('authInterceptor', () => {
  it('should add Authorization header if token exists', (done) => {
    localStorage.setItem('authToken', 'test-token');
    const req = new HttpRequest('GET', '/test');
    const next: HttpHandler = {
      handle: (r: HttpRequest<any>) => {
        expect(r.headers.get('Authorization')).toBe('Bearer test-token');
        done();
        return of({} as HttpEvent<any>);
      }
    };
    authInterceptor(req, next.handle.bind(next)).subscribe();
  });

  it('should not add Authorization header if no token', (done) => {
    localStorage.removeItem('authToken');
    const req = new HttpRequest('GET', '/test');
    const next: HttpHandler = {
      handle: (r: HttpRequest<any>) => {
        expect(r.headers.has('Authorization')).toBe(false);
        done();
        return of({} as HttpEvent<any>);
      }
    };
    authInterceptor(req, next.handle.bind(next)).subscribe();
  });
});
