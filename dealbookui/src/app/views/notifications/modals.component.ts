import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'modals.component.html'
})
export class ModalsComponent {
  // @ts-ignore
  @ViewChild('myModal') public myModal: ModalDirective;
  // @ts-ignore
  @ViewChild('largeModal') public largeModal: ModalDirective;
  // @ts-ignore
  @ViewChild('smallModal') public smallModal: ModalDirective;
  // @ts-ignore
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  // @ts-ignore
  @ViewChild('successModal') public successModal: ModalDirective;
  // @ts-ignore
  @ViewChild('warningModal') public warningModal: ModalDirective;
  // @ts-ignore
  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  // @ts-ignore
  @ViewChild('infoModal') public infoModal: ModalDirective;
}
