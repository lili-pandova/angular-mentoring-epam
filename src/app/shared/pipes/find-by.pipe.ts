import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FindBy'
})
export class FindByPipe implements PipeTransform {
    transform(findBy: any, searchTitle: string): any {
        if (!findBy) {
            return;
        }

        return findBy.filter(a => a.title.toLowerCase().includes(searchTitle));
    }
}
