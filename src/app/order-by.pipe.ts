import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
      value.filter((a, b) =>  a > b );
  }
}
