import { Directive,  ElementRef, Input, OnInit } from '@angular/core';
import { Course } from './shared/models/course/course';

@Directive({
    selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {
    @Input('appCourseBorder') creationDate: string;

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        const currentDate = new Date();
        if (this.creationDate < currentDate && this.creationDate >= currentDate.setDate( currentDate.getDate() - 14 )) {
            this.setBorderColor(`1px solid #9bc837`);
        } else if (this.creationDate > currentDate) {
            this.setBorderColor(`1px solid #30b6dd`);
        } else {
            this.setBorderColor(`none`);
        }
    }
    setBorderColor(color) {
        this.elementRef.nativeElement.style.border = color;
    }
}
