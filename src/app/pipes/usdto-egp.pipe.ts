import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDToEGP',
})
export class USDToEGPPipe implements PipeTransform {
  transform(value: number, rate: number = 20): number {
    return value * rate;
  }
}
