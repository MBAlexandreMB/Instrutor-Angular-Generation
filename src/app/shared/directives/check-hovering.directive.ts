import { Directive, ElementRef, Host, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCheckHovering]'
})
export class CheckHoveringDirective {

  constructor(private el: ElementRef<HTMLFormElement>) {
    this.el.nativeElement.hovered = false;
  }

  @HostListener('mouseenter') setHovered() {
    this.el.nativeElement.hovered = true;
  }

  @HostListener('mouseleave') setNotHovered() {
    this.el.nativeElement.hovered = false;
  }
}
