import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(data: string): string {
    const dataFormatada = moment(data, 'YYYY-MM-DDTHH:mm:ss');
    return dataFormatada.format('DD-MM-YYYY HH:mm');
  }

}
