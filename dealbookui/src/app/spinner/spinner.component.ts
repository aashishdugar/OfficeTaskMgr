import { Component, OnInit } from '@angular/core';
import { Utils } from '../providers/utils';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor( public utils:Utils) { }

  ngOnInit() {
  }

}
