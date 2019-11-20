import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(value: any, ...args): any {
        let timeDuration = value;
        console.log(args[0], 'timeDuration');
        if (args[0] === 0) {
            'Test check';
            console.log(timeDuration, 'timeDuration');
        }
        return timeDuration;
    }
}
