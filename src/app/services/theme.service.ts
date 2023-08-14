import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private isDarkTheme = false;
  private currentIcon = 'moon';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.currentIcon = this.isDarkTheme ? 'sun' : 'moon';

    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }

  getCurrentIcon(): string {
    return this.currentIcon;
  }

}
