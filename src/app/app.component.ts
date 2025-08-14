import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStateService } from './shared/services/app-state.service';
import { GlobalErrorService } from './core/services/global-error.service';
import { ErrorFallbackComponent } from './shared/components/error-fallback/error-fallback.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ErrorFallbackComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'xAmplify';
  hasGlobalError = false;

  constructor(private appState: AppStateService, private globalErrorService: GlobalErrorService) {
    this.appState.updateState();
    this.globalErrorService.error$.subscribe(error => {
      this.hasGlobalError = !!error;
    });
  }
}
