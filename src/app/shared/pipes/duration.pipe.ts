import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(value: any, ...args): any {
        const timeDuration = value;
        let hours = Math.floor((timeDuration / (60)));
        return  hours > 0 ? hours + ' h ' + timeDuration + " min " : timeDuration + ' min '
    }
}
