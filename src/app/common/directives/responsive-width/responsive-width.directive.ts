import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

/** Directive that will assign the input width to the element */
@Directive({
	selector: '[appResponsiveWidth]'
})
export class ResponsiveWidthDirective implements OnChanges {
	@Input() appResponsiveWidth?: number;

	constructor(private elmRef: ElementRef<HTMLElement>) {}

	/** For every change in input, assign the width or unseted. */
	ngOnChanges(changes: SimpleChanges): void {
		if (changes.appResponsiveWidth && typeof this.appResponsiveWidth !== 'undefined') {
			this.elmRef.nativeElement.style.width = this.appResponsiveWidth > 0 ? `${this.appResponsiveWidth}px` : 'unset';
		}
	}
}
