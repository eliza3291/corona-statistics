import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResponsiveWidth]'
})
export class ResponsiveWidthDirective implements OnChanges {
  @Input() appResponsiveWidth?: number;

  constructor(private elmRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appResponsiveWidth && typeof this.appResponsiveWidth !== 'undefined') {
      this.elmRef.nativeElement.style.width = this.appResponsiveWidth > 0 ? `${this.appResponsiveWidth}px` : 'unset';
    }
  }
}
