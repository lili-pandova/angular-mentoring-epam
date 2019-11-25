import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {
    @Input('appCourseBorder') creationDate: string;

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        const today = new Date();
        const creationDate = Number(this.creationDate);
        const currentDate = Number(today);

        if (
            creationDate < currentDate &&
            creationDate >= today.setDate(today.getDate() - 14)
        ) {
            this.elementRef.nativeElement.style.border = '1px solid #9bc837';
        } else if (creationDate > currentDate) {
            this.elementRef.nativeElement.style.border = '1px solid #30b6dd';
        } else {
            this.elementRef.nativeElement.style.border = 'none';
        }
    }
}
