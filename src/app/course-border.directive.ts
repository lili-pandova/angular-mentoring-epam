import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Course } from './shared/models/course/course';

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
            this.setBorderColor(`1px solid #9bc837`);
        } else if (creationDate > currentDate) {
            this.setBorderColor(`1px solid #30b6dd`);
        } else {
            this.setBorderColor(`none`);
        }
    }
    setBorderColor(color: any) {
        this.elementRef.nativeElement.style.border = color;
    }
}
