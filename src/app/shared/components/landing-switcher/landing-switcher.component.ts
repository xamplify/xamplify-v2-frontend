
import { Component, ElementRef, Inject, Renderer2, DOCUMENT } from '@angular/core';
import * as switcher from '../switcher/switcher.component';
import { SwitcherService } from '../../services/switcher.service';
import { NavService } from '../../services/navservice';

@Component({
    selector: 'app-landing-switcher',
    templateUrl: './landing-switcher.component.html',
    styleUrl: './landing-switcher.component.scss',
    standalone: false
})
export class LandingSwitcherComponent {
  body: HTMLBodyElement | null;
rgb: any;
  constructor( public renderer: Renderer2,
    public switcherServic: SwitcherService,
    public navServices: NavService,
    private elementRef: ElementRef){
    this.body = document.querySelector('body');
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  const bodyElement = document.body;
  }
  CheckOpe = () => {
    if (localStorage.getItem('ynex-dir') == 'rtl') {
      this.RtlChecked = true;
    }
    if (localStorage.getItem('ynex-dir') == 'rtl') {
      this.darkchecked = true;
    }
  };

  ngOnInit(): void {
 
    // switcher.localStorageBackUp();
    this.CheckOpe();
  }


// Theme color Mode
themeChange(type: string, type1: string) {
  // type = actual theme mode to set (e.g. 'glassy-light')
  // type1 = header/menu preset (commonly 'light' or 'dark')
  const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;

  // Normalize parent for glassy children explicitly
  if (type === 'glassy-light') {
    type1 = 'light';
  }
  if (type === 'glassy-dark') {
    // force parent mapping to dark to avoid accidental light fallbacks
    type1 = 'dark';
  }
  // Normalize parent for neu (neumorphism) children
  if (type === 'neu-light') {
    type1 = 'light';
  }
  if (type === 'neu-dark') {
    type1 = 'dark';
  }

  // Apply parent header/menu presets first
  // For glassy-light, auto-apply Transparent Header + Transparent Menu
  if (type === 'glassy-light') {
    this.renderer.setAttribute(htmlElement, 'data-header-styles', 'transparent');
    localStorage.setItem('ynexHeader', 'transparent');
    this.renderer.setAttribute(htmlElement, 'data-menu-styles', 'transparent');
    localStorage.setItem('ynexMenu', 'transparent');
  } else {
    // Apply parent (base) presets first so glassy child overlays inherit correctly
    this.renderer.setAttribute(htmlElement, 'data-header-styles', type1);
    localStorage.setItem('ynexHeader', type1);
    this.renderer.setAttribute(htmlElement, 'data-menu-styles', type1);
    localStorage.setItem('ynexMenu', type1);
  }

  // Clear any specific light-only classes if switching to dark glassy
  if (type === 'glassy-dark') {
    document.body.classList.remove('light-mode');
    document.body.classList.remove('transparent-mode');
  }

  // Then set the actual theme-mode (child) so overrides apply on top of base
  // If the selected theme is a child (glassy-*), keep the parent's theme-mode
  // attribute and set a separate variant attribute so base tokens defined for
  // 'dark' or 'light' still apply. Persist the child identifier.
  if (type.startsWith('glassy-')) {
    // set parent as the actual theme-mode
    this.renderer.setAttribute(htmlElement, 'data-theme-mode', type1);
    // set the child/variant attribute
    this.renderer.setAttribute(htmlElement, 'data-theme-variant', type);
    localStorage.setItem('ynexdarktheme', type);
  } else {
    // normal theme (no child variant)
    this.renderer.setAttribute(htmlElement, 'data-theme-mode', type);
    // remove variant if any
    this.renderer.removeAttribute(htmlElement, 'data-theme-variant');
    localStorage.setItem('ynexdarktheme', type);
  }

  // Debug hook — remove after verification
  try {
    console.debug('themeChange', { theme: type, parentApplied: type1, htmlAttr: document.documentElement.getAttribute('data-theme-mode'), stored: localStorage.getItem('ynexdarktheme') });
  } catch (e) {}

  // Keep existing cleanup behavior for light preset
  if (localStorage.getItem('ynexHeader') == 'light') {
    this.elementRef.nativeElement.ownerDocument.documentElement?.removeAttribute(
      'style'
    );
  }
  
  if (localStorage.getItem('ynexdarktheme') == 'light') {
    this.elementRef.nativeElement.ownerDocument.documentElement?.removeAttribute(
      'style'
    );
    localStorage.removeItem('bodyBgRGB')
    localStorage.removeItem('bodylightRGB')
  }
  
}

//  Directions
DirectionsChange(type: string) {
  let body = document.querySelector('body');
  const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'dir', type);
  localStorage.setItem('dir', type);

  if(htmlElement?.getAttribute('dir') == 'ltr'){
    body?.classList.remove('rtl');
  } else {
    body?.classList.add('rtl');
  }

   if (localStorage.getItem('dir') == 'ltr') {
    localStorage.removeItem('dir');
  }
  if (localStorage.getItem('dir') == 'rtl') {
    this.renderer.setAttribute(htmlElement, 'dir', type);
  }
  

}


   //Theme Primary
   primary(type: string) {
    this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty(
      '--primary-rgb',
      type
    );
   
    localStorage.setItem('primaryRGB', type);
    localStorage.removeItem('ynexlight-primary-color');
  }
  color1 = '#1457e6';
    //primary theme change
    public dynamicLightPrimary(data: any): void {
      this.color1 = data.color;
  
      const dynamicPrimaryLight = document.querySelectorAll(
        'input.color-primary-light'
      );
  
      // switcher.dynamicLightPrimaryColor(dynamicPrimaryLight, this.color1);
  
      // localStorage.setItem('ynexlight-primary-color', switcher.hexToRgba(this.color1) || '');
      // localStorage.setItem('ynexlight-primary-color1', switcher.hexToRgba(this.color1) || '');
      localStorage.setItem('ynexlight-mode', 'true');
      this.body?.classList.remove('transparent-mode');
  
      // Adding
      this.body?.classList.add('light-mode');
  
      // Removing
      this.body?.classList.remove('dark');
      this.body?.classList.remove('bg-img1');
  
      // removing data from session storage
  
      // switcher.checkOptions();
      localStorage.removeItem('ynex-primary-mode');
    }
  
  // public localDark = localStorage;
  public localdata = localStorage;
  public darkchecked: any;
  public RtlChecked: any;
  reset() {
    localStorage.clear();
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    htmlElement.removeAttribute('style');
    htmlElement.setAttribute('class', 'light');
    htmlElement.setAttribute('dir', 'ltr');
    htmlElement.setAttribute('data-nav-layout', 'horizontal');
    htmlElement.setAttribute('data-page-style', 'regular');
    htmlElement.setAttribute('data-header-styles', 'light');
    htmlElement.setAttribute('data-menu-styles', 'dark');
    htmlElement.setAttribute('bg-img', 'dark');
    htmlElement.removeAttribute('data-toggled');
    htmlElement.removeAttribute('style');
    // switcher.checkOptions();
     this.toggleExpand();
  }
  expande = false;
expande1 = false;
expande2 = false;
toggleExpand(): void {
  this.expande = !this.expande;   
 if (localStorage.getItem('data-menu-styles') == 'light') {
   document
     .querySelector('html')
     ?.setAttribute('data-menu-styles', 'light');
 } else if (localStorage.getItem('data-menu-styles') == 'dark') {
   document
     .querySelector('html')
     ?.setAttribute('data-menu-styles', 'dark');
 }
}

SwitcherClose() {
  document.querySelector('.offcanvas-end')?.classList.remove('show');
  document.querySelector('.offcanvas-end')?.classList.toggle('hidden');
}

ngOnDestroy() {
  if (localStorage.getItem('data-menu-styles') == 'light') {
    document
      .querySelector('html')
      ?.setAttribute('data-menu-styles', 'light');
  } else if (localStorage.getItem('data-menu-styles') == 'dark') {
    document
      .querySelector('html')
      ?.setAttribute('data-menu-styles', 'dark');
  }
}

}

