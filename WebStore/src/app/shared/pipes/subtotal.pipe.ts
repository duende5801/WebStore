import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtotal'
})
export class SubtotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
