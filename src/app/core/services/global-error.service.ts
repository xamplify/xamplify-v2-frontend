import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GlobalErrorService {
  private errorSubject = new BehaviorSubject<any>(null);
  error$ = this.errorSubject.asObservable();

  setError(error: any) {
    this.errorSubject.next(error);
  }

  clearError() {
    this.errorSubject.next(null);
  }
}
