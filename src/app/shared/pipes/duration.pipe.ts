import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(value: any, ...args): any {
        const timeDuration = value;
        const hours = Math.floor((timeDuration / (60)));
        const min = timeDuration - (hours * 60);
        return  hours > 0 ? hours + ' h ' + min + ' min ' : timeDuration + ' min ';
    }
}
