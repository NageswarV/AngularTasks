import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../UserModel';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: UserModel): string {
    return value.firstName+' '+value.lastName;
  }


}
