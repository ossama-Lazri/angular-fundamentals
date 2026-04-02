import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input('appHighlight') highlightClass = 'bg-yellow-50';

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  @HostListener('mouseenter') onEnter() {
    this.renderer.addClass(this.el.nativeElement, this.highlightClass);
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.removeClass(this.el.nativeElement, this.highlightClass);
  }
}
