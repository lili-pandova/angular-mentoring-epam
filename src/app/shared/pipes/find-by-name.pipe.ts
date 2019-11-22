import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findByName'
})

export class FindByNamePipe implements PipeTransform {
  transform(value: CourseTitle[], searchTitle: string): CourseTitle[] {
  console.log(value, "value")
  console.log(searchTitle, "searchTitle")
  if(!value) {
    console.log(value, "value2")
 }
    return value.filter((a) => a === a.title)
  }
}
