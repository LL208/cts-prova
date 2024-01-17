import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top-component',
  templateUrl: './back-to-top-component.component.html',
  styleUrls: ['./back-to-top-component.component.scss'],
})
export class BackToTopComponentComponent {
  showButton: boolean = false;
  reverseAnimation: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showButton = window.scrollY > 500;
    const isScrollingUp = window.scrollY < 0;

    if (!this.showButton && isScrollingUp) {
      this.reverseAnimation = true;
    } else {
      this.reverseAnimation = false;
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onAnimationEnd(): void {
    if (!this.showButton) {
      this.reverseAnimation = false;
    }
  }

}
