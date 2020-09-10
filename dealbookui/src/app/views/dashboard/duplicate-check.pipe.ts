import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicateCheck'
})
export class DuplicateCheckPipe implements PipeTransform {

  transform(value: any, item: number, ...args: any[]): any {
    let list = [];
    let uniqueArray = value.filter(function (el, i, array) { 
      if(typeof el[item] == "object"){
        return list.indexOf(el[item].name) > -1 ? false : (list.push(el[item].name), true);
      }
      return list.indexOf(el[item]) > -1 ? false : (list.push(el[item]), true);
    });
    return uniqueArray;
  }

}
