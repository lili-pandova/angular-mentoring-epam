import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'findByName'
})
export class FindByNamePipe implements PipeTransform {
    transform(value: any, searchTitle: string): any {
        if (!value) {
            return;
        }
        return value.filter(a => a.title.toLowerCase().includes(searchTitle));
    }
}
