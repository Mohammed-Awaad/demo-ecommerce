import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective implements OnChanges {
  @Input('LightBox') borderColor: string = '#f1f2f9';
  @Input() hoverBorderColor: string = '#f1f2f9';
  constructor(private element: ElementRef) {}

  ngOnChanges(): void {
    this.element.nativeElement.style.border = `1px solid ${this.borderColor}`;
  }

  @HostListener('mouseover') onMouseOver() {
    this.element.nativeElement.style.border = `1px solid ${this.hoverBorderColor}`;
    this.element.nativeElement.style.cursor = 'pointer';
    this.element.nativeElement.style.transition = '0.3s';
    this.element.nativeElement.classList.add('shadow-lg');
  }

  @HostListener('mouseout') onMouseOut() {
    this.element.nativeElement.style.border = `1px solid ${this.borderColor}`;
  }
}
