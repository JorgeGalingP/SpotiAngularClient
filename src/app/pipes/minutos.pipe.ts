import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutos'
})
export class MinutosPipe implements PipeTransform {
  transform(value: number): string {
      let date = new Date(value);
      let m = date.getMinutes();
      var s = date.getSeconds();
      
      if(s < 10){
          return (m + ":0" + s);
      }
      return (m + ":" + s);
  }
}
