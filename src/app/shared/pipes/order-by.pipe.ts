import { Pipe, PipeTransform } from '@angular/core';

import { CourseDate } from '../models/course/course';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(value: CourseDate[]): CourseDate[] {
        if (!Array.isArray(value)) {
            return;
        }
        value.sort((a: CourseDate, b: CourseDate) => {
            const result = new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
            if (result < 0) {
                return -1;
            } else if (result > 0) {
                return 1;
            } else {
                return 0;
            }
        });
        return value;
    }
}
