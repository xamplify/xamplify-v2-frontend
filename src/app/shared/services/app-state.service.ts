import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface StateType {
  direction: string;
  theme: string;
  navigationStyles: string,   // vertical, horizontal
  menuStyles: string,                 // menu-click, menu-hover, icon-click, icon-hover
  layoutStyles: string,   // double-menu, detached, icon-overlay, icontext-menu, closed-menu, default-menu
  pageStyles: string,          // regular, classic, modern
  widthStyles: string,       // fullwidth, boxed
  menuPosition: string,          // fixed, scrollable
  headerPosition: string,        // fixed, scrollable
  menuColor: string,                  // light, dark, color, gradient, transparent
  headerColor: string,                // light, dark, color, gradient, transparent
  themePrimary: string,               // '58, 88, 146', '92, 144, 163', '161, 90, 223', '78, 172, 76', '223, 90, 90'
  themeBackground: string,
  backgroundImage: string,
};
@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private readonly localStorageKey = 'xAmplify-ng'; // Customize this key
  private initialState: StateType = {
    theme: 'light',            // light, dark
    direction: 'ltr',               // ltr, rtl
    navigationStyles: 'vertical',   // vertical, horizontal
    menuStyles: '',                 // menu-click, menu-hover, icon-click, icon-hover
    layoutStyles: 'default',   // double-menu, detached, icon-overlay, icontext-menu, closed-menu, default-menu
    pageStyles: 'regular',          // regular, classic, modern
    widthStyles: 'fullwidth',       // fullwidth, boxed
    menuPosition: 'fixed',          // fixed, scrollable
    headerPosition: 'fixed',        // fixed, scrollable
    menuColor: 'light',                  // light, dark, color, gradient, transparent
    headerColor: 'light',                // light, dark, color, gradient, transparent
    themePrimary: '',          // '58, 88, 146', '92, 144, 163', '161, 90, 223', '78, 172, 76', '223, 90, 90'
    themeBackground: '',
    backgroundImage: '',         // bgimg1, bgimg2, bgimg3, bgimg4, bgimg5
  } // Store initial state
  private stateSubject = new BehaviorSubject<StateType>(this.initialState); // Use any for initial null value
  state$ = this.stateSubject.asObservable();
  navigationStyles: any;

  constructor() {
    const initialState: StateType = this.getInitialStateFromLocalStorage();
    this.initializeState();
    // If a theme was persisted using the switcher (older key 'ynexdarktheme'),
    // apply it now so child themes like 'glassy-dark' correctly inherit their parent.
    try {
      const persisted = localStorage.getItem('ynexdarktheme');
      if (persisted) {
        // Apply persisted theme (this will set header/menu presets and data-theme-mode)
        // If persisted 'glassy-light' and explicit menu/header not set, initialize them to transparent
        const storedMenu = localStorage.getItem('ynexMenu');
        const storedHeader = localStorage.getItem('ynexHeader');
        if (persisted === 'glassy-light') {
          if (!storedMenu) try { localStorage.setItem('ynexMenu', 'transparent'); } catch(e) {}
          if (!storedHeader) try { localStorage.setItem('ynexHeader', 'transparent'); } catch(e) {}
        }
        this.applythemeSpecificChanges(persisted);
        // Ensure the stateSubject reflects the persisted theme
        const stateWithTheme = { ...initialState, theme: persisted } as StateType;
        this.stateSubject.next(stateWithTheme);
      } else {
        this.stateSubject.next(initialState);
      }
    } catch (e) {
      this.stateSubject.next(initialState);
    }
  }

  private getInitialStateFromLocalStorage(): StateType {
    try {
      const storedState = localStorage.getItem(this.localStorageKey);
      if (storedState) {
        return JSON.parse(storedState);
      }
    } catch (error) {
      console.error('Error retrieving initial state from local storage:', error);
    }
    return this.initialState;
  }

  private initializeState() {
    const state = { ...this.initialState }; // Clone initial state to avoid mutation
    this.applyDirectionSpecificChanges(state.direction); // Apply initial changes
    this.stateSubject.next(state); // Emit initial state after changes
  }

  updateState(newState?: Partial<any>) { // Use any for partial updates
    const currentState = this.stateSubject.getValue(); // Get current state
    if (!currentState) {
      // Handle initial update case (no state emitted yet)
      this.updateStateAndEmit(newState);
      return;
    }
    if (newState) {
      const updatedState = { ...currentState, ...newState }; // Merge updates
      this.updateStateAndEmit(updatedState); // Update and emit combined state
    } else {
      this.updateStateAndEmit(currentState);
      return;
    }
  }

  private applyThemeBackgroundSpecificChanges(background: any) {
    if (!background) return; // Handle the case where no background is set
    const html = document.querySelector('html');      
    html?.style.setProperty('--body-bg-rgb', background.main);
    html?.style.setProperty('--body-bg-rgb2', background.secondary);
    html?.style.setProperty('--light-rgb', background.accent);
    html?.style.setProperty('--form-control-bg', `rgba(${background.accent})`);
    html?.style.setProperty('--input-border', background.overlay);
    html?.style.setProperty('--input-border', background.overlay);
    html?.style.setProperty('--gray-3', background.primary);
    this.applythemeSpecificChanges(background.theme);
  }


  private applyDirectionSpecificChanges(direction: string) {
    let html = document.querySelector('html');
    html?.setAttribute('dir', direction);
  }
  private applythemeSpecificChanges(theme: string) {
    let html = document.querySelector('html');
    // Debug - show incoming theme and current attributes
    try {
      console.debug('applythemeSpecificChanges called', { theme, current: html?.getAttribute('data-theme-mode') });
    } catch (e) {}

    // Cleanup: if a legacy single-mode value like 'glassy-light' or 'glassy-dark' was left
    // on the root, remove it so parent+variant layering (data-theme-mode + data-theme-variant)
    // is enforced. Also clear any inline body backgroundImage to avoid glassy-light bleed.
    try {
      const currentMode = html?.getAttribute('data-theme-mode') || '';
      if (currentMode.startsWith('glassy-') || currentMode.startsWith('neu-')) {
        html?.removeAttribute('data-theme-mode');
      }
      if (document.body && document.body.style && document.body.style.backgroundImage) {
        document.body.style.backgroundImage = '';
      }
    } catch (e) {}

    // Explicit handling for glassy child themes: apply parent presets first
    if (theme === 'glassy-dark') {
      // ensure any light-mode inline tokens are removed so dark base isn't overwritten
      if (html) {
        html.style.removeProperty('--body-bg-rgb');
        html.style.removeProperty('--body-bg-rgb2');
        html.style.removeProperty('--light-rgb');
        html.style.removeProperty('--gray-3');
      }
  // Apply dark base presets first
  html?.setAttribute('data-header-styles', 'dark');
  html?.setAttribute('data-menu-styles', 'dark');
  // Keep data-theme-mode as parent 'dark' so base tokens apply
  html?.setAttribute('data-theme-mode', 'dark');
  // Use a separate attribute for the child/variant so SCSS can target it
  html?.setAttribute('data-theme-variant', 'glassy-dark');
  try { localStorage.setItem('ynexdarktheme', 'glassy-dark'); } catch (e) {}
      try { console.debug('applythemeSpecificChanges applied', { theme: 'glassy-dark', header: html?.getAttribute('data-header-styles') }); } catch (e) {}
      return;
    }

    // Neumorphism child themes - apply parent and set variant
    if (theme === 'neu-dark') {
      if (html) {
        html.style.removeProperty('--body-bg-rgb');
        html.style.removeProperty('--body-bg-rgb2');
        html.style.removeProperty('--light-rgb');
        html.style.removeProperty('--gray-3');
      }
  html?.setAttribute('data-header-styles', 'dark');
  html?.setAttribute('data-menu-styles', 'dark');
  html?.setAttribute('data-theme-mode', 'dark');
  html?.setAttribute('data-theme-variant', 'neu-dark');
  try { localStorage.setItem('ynexdarktheme', 'neu-dark'); } catch (e) {}
  try { console.debug('applythemeSpecificChanges applied', { theme: 'neu-dark' }); } catch (e) {}
      return;
    }

    if (theme === 'neu-light') {
      if (html) {
        html.style.removeProperty('--body-bg-rgb');
        html.style.removeProperty('--body-bg-rgb2');
        html.style.removeProperty('--light-rgb');
        html.style.removeProperty('--gray-3');
      }
  html?.setAttribute('data-header-styles', 'light');
  html?.setAttribute('data-menu-styles', 'light');
  html?.setAttribute('data-theme-mode', 'light');
  html?.setAttribute('data-theme-variant', 'neu-light');
  try { localStorage.setItem('ynexdarktheme', 'neu-light'); } catch (e) {}
  try { console.debug('applythemeSpecificChanges applied', { theme: 'neu-light' }); } catch (e) {}
      return;
    }

    if (theme === 'glassy-light') {
      if (html) {
        html.style.removeProperty('--body-bg-rgb');
        html.style.removeProperty('--body-bg-rgb2');
        html.style.removeProperty('--light-rgb');
        html.style.removeProperty('--gray-3');
      }
  html?.setAttribute('data-header-styles', 'light');
  html?.setAttribute('data-menu-styles', 'light');
  html?.setAttribute('data-theme-mode', 'light');
  html?.setAttribute('data-theme-variant', 'glassy-light');
  try { localStorage.setItem('ynexdarktheme', 'glassy-light'); } catch (e) {}
      try { console.debug('applythemeSpecificChanges applied', { theme: 'glassy-light', header: html?.getAttribute('data-header-styles') }); } catch (e) {}
      return;
    }

    // Default: apply the theme directly for non-child themes
    html?.setAttribute('data-theme-mode', theme);
    html?.setAttribute('data-header-styles', theme);
    html?.setAttribute('data-menu-styles', theme);
  }
  
  private applyNavigationStylesSpecificChanges(navigationStyles: string) {
    let html = document.querySelector('html');
    html?.setAttribute('data-nav-layout', navigationStyles);
    if (navigationStyles == 'horizontal') {
      html?.setAttribute('data-nav-style', 'menu-click');
      html?.removeAttribute('data-vertical-style');
    }
  }
  private applyMenuStylesSpecificChanges(menuStyles: string) {
    let html = document.querySelector('html');
    html?.setAttribute('data-nav-style', menuStyles);
    html?.setAttribute('data-toggled', menuStyles+'-closed');
    html?.removeAttribute('data-vertical-style');
  }
  private applyLayoutStylesSpecificChanges(layoutStyles: string) {
    let html = document.querySelector('html');
    html?.setAttribute('data-vertical-style', layoutStyles);
    html?.removeAttribute('data-nav-style');
    switch (layoutStyles) {
      case 'default':
        html?.setAttribute('data-vertical-style', 'overlay');
        html?.setAttribute('data-toggled', '');
        break;
      case 'closed':
        html?.setAttribute('data-toggled', 'close-menu-close');
        break;
      case 'icontext':
        html?.setAttribute('data-toggled', 'icon-text-close');
        break;
      case 'overlay':
        html?.setAttribute('data-toggled', 'icon-overlay-close');
        break;
      case 'detached':
        html?.setAttribute('data-toggled', 'detached-close');
        break;
      case 'doublemenu':
        html?.setAttribute('data-toggled', 'double-menu-open');
        break;
    }
    if (layoutStyles === 'icon-text') {
      html?.setAttribute('icon-text', 'open');
    } else {
      // If not 'icon-text', remove the icon-text attribute
      html?.removeAttribute('icon-text');
    }
  }
  private applypageStylesSpecificChanges(pageStyles: string) {
    let html = document.querySelector('html');    
    html?.setAttribute('data-page-style', pageStyles);

    const slideRight = document.querySelector('.slide-right') as HTMLElement | null;
    if (slideRight) {
      // If the element exists, toggle the 'd-none' class
      if (slideRight.classList.contains('d-none')) {
        slideRight.classList.remove('d-none');
      } else {
        slideRight.classList.add('d-none');
      }
    } else {
      // If the element does not exist (is null), create a safe fallback by adding 'd-none'
      const dummySlideRight = document.createElement('div');
      dummySlideRight.classList.add('slide-right', 'd-none'); // Add classes to the new element
      document.body.appendChild(dummySlideRight); // Append it to the DOM as a fallback
    }
  }
  private applywidthStylesSpecificChanges(widthStyles: string) {
    let html = document.querySelector('html');    
    html?.setAttribute('data-width', widthStyles);
  }
  private applymenuPositionSpecificChanges(menuPosition: string) {
    let html = document.querySelector('html');    
    html?.setAttribute('data-menu-position', menuPosition);
  }
  private applyheaderPositionSpecificChanges(headerPosition: string) {
    let html = document.querySelector('html');
    html?.setAttribute('data-header-position', headerPosition);
  }
  private applyheaderColorSpecificChanges(headerColor: string) {
    let html = document.querySelector('html');
    html?.setAttribute('data-header-styles', headerColor);
  }
  private applymenuColorSpecificChanges(menuColor: string) {
    let html = document.querySelector('html');    
    html?.setAttribute('data-menu-styles', menuColor);
  }
  private applyPrimarySpecificChanges(primary: string) {
    let html = document.querySelector('html');        
    html?.style.setProperty('--primary-rgb', primary);
  }
  private applybackgroundImageSpecificChanges(backgroundImage: string) {
    let html = document.querySelector('html');        
    html?.setAttribute('data-bg-img', backgroundImage);
  }
 
  public applyReset() {
    let html = document.querySelector('html');
    if(html){
      html?.style.removeProperty( '--body-bg-rgb');
      html?.style.removeProperty( '--body-bg-rgb2');
      html?.style.removeProperty( '--light-rgb');
      html?.style.removeProperty( '--gray-3');
      html?.style.removeProperty( '--form-control-bg');
      html?.style.removeProperty( '--input-border' );
      html?.style.removeProperty('--primary-rgb');
    }
    html?.removeAttribute('data-bg-img');
    html?.setAttribute('data-vertical-style','overlay');
    this.stateSubject.next(this.initialState);
    this.updateStateAndEmit(this.initialState);
    localStorage.clear();

    const checkedElement = document.querySelector('[name="theme-primary"]:checked') as HTMLInputElement | null;
    // Check if the element exists before trying to modify it
    if (checkedElement) {
        checkedElement.checked = false;
    }
    const checkedElement1 = document.querySelector('[name="theme-background"]:checked') as HTMLInputElement | null;
    // Check if the element exists before trying to modify it
    if (checkedElement1) {
        checkedElement1.checked = false;
    }
    const checkedElement2 = document.querySelector('[name="layout-width"]:checked') as HTMLInputElement | null;
    // Check if the element exists before trying to modify it
    if (checkedElement2) {
        checkedElement2.checked = true;
    }
  }
  
  private updateStateAndEmit(state: any) {   
    // Conditional logic based on direction changes        
    const currentState = this.stateSubject.getValue(); // Get current state    
    // Conditional logic based on theme changes
    if (state['theme']) {
      this.applythemeSpecificChanges(state['theme']);
    }
    if (state['direction']) {
      this.applyDirectionSpecificChanges(state['direction']);
    }
    // Conditional logic based on theme changes
    if (state['navigationStyles']) {
      this.applyNavigationStylesSpecificChanges(state['navigationStyles']);
    }
    // Conditional logic based on theme changes
    if (state['menuStyles'] && !state['layoutStyles']) {
      this.applyMenuStylesSpecificChanges(state['menuStyles']);
    }
    if (state['layoutStyles'] && !state['menuStyles']) {
      this.applyLayoutStylesSpecificChanges(state['layoutStyles']);
    }
    if (state['pageStyles']) {
      this.applypageStylesSpecificChanges(state['pageStyles']);
    }
    if (state['widthStyles']) {
      this.applywidthStylesSpecificChanges(state['widthStyles']);
    }
    if (state['menuPosition']) {
      this.applymenuPositionSpecificChanges(state['menuPosition']);
    }
    if (state['headerPosition']) {
      this.applyheaderPositionSpecificChanges(state['headerPosition']);
    }
    if (state['themePrimary']) {
      this.applyPrimarySpecificChanges(state['themePrimary']);
    }
    if (state['themeBackground']) {
        this.applyThemeBackgroundSpecificChanges(state['themeBackground']);
    }
    if (state['headerColor']) {
      this.applyheaderColorSpecificChanges(state['headerColor']);
    }
    if (state['menuColor']) {
      this.applymenuColorSpecificChanges(state['menuColor']);
    }
    if (state['backgroundImage']) {
      this.applybackgroundImageSpecificChanges(state['backgroundImage']);
    }

    this.stateSubject.next(state);
    this.updateLocalStorage(state);
  }

  private updateLocalStorage(state: any) {
    try {
      localStorage.setItem(this.localStorageKey, JSON.stringify(state));
    } catch (error) {
      // console.error('Error saving state to local storage:', error);
    }
  }
}
