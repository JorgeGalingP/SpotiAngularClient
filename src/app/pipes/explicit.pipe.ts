import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'explicit'
})
export class ExplicitPipe implements PipeTransform {
  transform(value: boolean): string {
      if(!value){
          return "";
      }
    return "Explicit";
  }
}
