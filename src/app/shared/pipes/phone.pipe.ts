import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(tel: any, args?: any): any {
    const value = tel.toString().trim().replace(/^\+/, '');

    const area = value.substring(0, 3);
    const phone3 = value.substring(3, 6);
    const phone4 = value.substring(6, 10);

    return '(' + area + ') ' + phone3 + '-' + phone4;
  }
}
