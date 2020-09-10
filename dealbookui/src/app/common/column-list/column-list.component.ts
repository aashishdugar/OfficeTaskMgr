import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ContactsModel } from 'src/app/model/contacts.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-column-list',
  templateUrl: './column-list.component.html',
  styleUrls: ['./column-list.component.css']
})
export class ColumnListComponent {
  form: FormGroup;
  ordersData = [];
  model;
  isDisabled = true;
  constructor(private formBuilder: FormBuilder, private contactService: ContactsService) {
    contactService.displayColumns.subscribe(val=> this.model = val);
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });

    // async orders
    of(this.getOrders()).subscribe(orders => {
      this.ordersData = orders;
      this.addCheckboxes();
    });
  }

  private addCheckboxes() {
    this.ordersData.forEach((o, i) => {
      const control = new FormControl(o.display); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }
  getOrders() {
    return this.model;
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.ordersData, event.previousIndex, event.currentIndex);
    moveItemInArray(this.form.controls.orders['controls'], event.previousIndex, event.currentIndex)
    this.contactService.updateColumns(this.model);
  }

  submit() {
    this.form.value.orders
      .forEach((v, i)=>{
        this.model[i].display = v;
      })
      // console.log(this.form.value.orders);
    this.contactService.updateColumns(this.model);
  }
  
  changeColumn($event) {
    this.submit();
  }

}
