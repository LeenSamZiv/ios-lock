import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[slideHorizontalDirective]',
})
export class SlideHorizontalDirective {
  isMouseDown = false;
  touchstartPositionX = 0;
  translatePositionX = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.el.nativeElement.addEventListener('touchstart', ($event) => this.handleTouchstart($event, false), {passive: true});
    this.el.nativeElement.addEventListener('mousedown', ($event) => this.handleTouchstart($event, true), {passive: true});

    this.el.nativeElement.addEventListener('touchmove', ($event) => this.handleTouchmove($event, false), {passive: true});
    this.el.nativeElement.addEventListener('mousemove', ($event) => this.handleTouchmove($event, true), {passive: true});

    this.el.nativeElement.addEventListener('touchend', ($event) => this.handleTouchend($event), {passive: true});
    this.el.nativeElement.addEventListener('mouseup', ($event) => this.handleTouchend($event), {passive: true});
  }

  handleTouchstart($event, isMouse: boolean) {
    this.isMouseDown = true;
    this.renderer.setStyle(this.el.nativeElement, 'transition', '');
    this.touchstartPositionX = isMouse ? $event.clientX : $event.changedTouches[0].clientX;
    this.translatePositionX = this.getTranslateXPosition();
    $event.stopPropagation();
  }

  handleTouchmove($event, isMouse: boolean) {
    if (this.isMouseDown) {
      const swipeX = this.translatePositionX + (isMouse ? $event.clientX : $event.changedTouches[0].clientX) - this.touchstartPositionX;
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(' + swipeX + 'px)');
      $event.stopPropagation();
    }
  }

  handleTouchend($event) {
    this.isMouseDown = false;
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.8s ease-out');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0px)');
    $event.stopPropagation();
  }

  getTranslateXPosition() {
    const num = this.el.nativeElement.style.transform.replace('translateX(', '').replace('px)', '');
    return (num ? parseInt(num, 10) : 0);
  }
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[slideVerticalDirective]',
})
export class SlideVerticalDirective {
  isMouseDown = false;
  touchstartPositionY = 0;
  translatePositionY = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.el.nativeElement.addEventListener('touchstart', ($event) => this.handleTouchstart($event, false), {passive: true});
    this.el.nativeElement.addEventListener('mousedown', ($event) => this.handleTouchstart($event, true), {passive: true});

    this.el.nativeElement.addEventListener('touchmove', ($event) => this.handleTouchmove($event, false), {passive: true});
    this.el.nativeElement.addEventListener('mousemove', ($event) => this.handleTouchmove($event, true), {passive: true});

    this.el.nativeElement.addEventListener('touchend', ($event) => this.handleTouchend($event), {passive: true});
    this.el.nativeElement.addEventListener('mouseup', ($event) => this.handleTouchend($event), {passive: true});
  }

  handleTouchstart($event, isMouse: boolean) {
    this.isMouseDown = true;
    this.renderer.setStyle(this.el.nativeElement, 'transition', '');
    this.touchstartPositionY = isMouse ? $event.clientY : $event.changedTouches[0].clientY;
    this.translatePositionY = this.getTranslateYPosition();
    $event.stopPropagation();
  }

  handleTouchmove($event, isMouse: boolean) {
    if (this.isMouseDown) {
      const swipeY = this.translatePositionY + (isMouse ? $event.clientY : $event.changedTouches[0].clientY) - this.touchstartPositionY;
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(' + swipeY + 'px)');
      $event.stopPropagation();
    }
  }

  handleTouchend($event) {
    this.isMouseDown = false;
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.8s ease-out');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0px)');
    $event.stopPropagation();
  }

  getTranslateYPosition() {
    const num = this.el.nativeElement.style.transform.replace('translateY(', '').replace('px)', '');
    return (num ? parseInt(num, 10) : 0);
  }
}
