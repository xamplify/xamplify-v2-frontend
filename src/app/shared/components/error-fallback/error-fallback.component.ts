import { Component } from '@angular/core';

@Component({
  selector: 'app-error-fallback',
  template: `
    <div class="error-fallback">
      <h1>Something went wrong</h1>
      <p>We're sorry, but an unexpected error has occurred.</p>
      <button (click)="reload()">Reload Page</button>
    </div>
  `,
  styles: [`
    .error-fallback { text-align: center; margin-top: 10vh; }
    h1 { color: #d32f2f; }
    button { margin-top: 2rem; }
  `]
})
export class ErrorFallbackComponent {
  reload() {
    window.location.reload();
  }
}
