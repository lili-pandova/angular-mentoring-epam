import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(value: any, ...args): any {
        const timeDuration = value;
        console.log(args[0], 'timeDuration');
        if (args[0] < 1) {
            let round = Math.round(timeDuration * 100);
            return round += 'min';
        } else {
            return timeDuration.toString().split('.').join('h ') + 'min';
        }
    }
}
