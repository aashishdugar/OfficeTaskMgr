import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSearchFilter'
})
export class TextSearchFilterPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   if(!args)
  //    return value;
  //   return value.filter(
  //     item => item.name.toLowerCase().indexOf(args.toLowerCase()) > -1 || item.mobile.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
  //     item.designation.toLowerCase().indexOf(args.toLowerCase()) > -1  ||  item.email.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
  //     item.contactOrg.name.toLowerCase().indexOf(args.toLowerCase()) > -1
  //  );
  // }
  tempOrder : string;contactOrg
  transform(value: any, orderBy:string="name", orderType: boolean, search?:string): any {
    if(!value || !value.length) return value;
    let order = orderBy.toLocaleLowerCase().replace(/ /g,'');
    if(search) value = value.filter(function(item, index){
      let str = (order != 'contactowner' && order != 'reportto')?item[order]:item[order]?item[order].name:"";
      // console.log(str);
      return str && str.toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
    })
    let data = value.sort(function(a, b){
      if(order == 'contactowner' || order == 'reportto') {
        return orderType ? a[order]? a[order].name.localeCompare(b[order]&&b[order].name):0 : b[order]? b[order].name.localeCompare(a[order] && a[order].name):0;
      }
      return (a[order] && b[order])? orderType ? a[order].localeCompare(b[order]) : b[order].localeCompare(a[order]):0;
    })
      this.tempOrder = orderBy;
    return [...data];
  }
  // transform(items: any[], searchText: string): any[] {
  //   if (!items) {
  //     return [];
  //   }
  //   if (!searchText) {
  //     return items;
  //   }
  //   searchText = searchText.toLowerCase();

  //   return items.filter(it => {
  //     return it.toLowerCase().includes(searchText);
  //   });
  // }

}
