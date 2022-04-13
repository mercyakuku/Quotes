import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any) :number {
    let dateCount: string='';
    let today:any = new Date(); 
    let difference = Math.abs( value - today) /1000;
    let days = Math.floor(difference/86400);

    if (days > 1 ){
      dateCount += Math.floor(days)+" days";
      return difference;
    }
      else{(Math.floor(days)==0)

     return 0;

      }
  }

}
