import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
})
export class CustompipePipe implements PipeTransform {
  transform(value: string): string {
    debugger;
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
