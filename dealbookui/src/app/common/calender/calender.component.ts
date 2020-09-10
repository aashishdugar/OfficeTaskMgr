import { Component, OnInit, ViewChild, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit, AfterViewInit {
  title = 'calander';
  daysInMonth: Number[];
  startWeek: number[];
  year: number;
  today: number;
  monthName: string;
  month: number;
  weekname: number;
  prevMonth:number[];
  nextMonth:number[];
  show = false;
  @Output('changeDate') changeDate = new EventEmitter<any>();
  @Input('left') left;
  @Input('top') top;
  @Input('curDate') curDate;
  // @ViewChild(calender, {static: false}) calender;
  @ViewChild('calender', {static: false}) input;
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  constructor() {
    this.updateCalander();
  }
  ngOnInit(){}
  updateCalander() {
    let date = new Date();
    this.today = date.getDate();
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.updateMonthAndYear();
  }
  changeMonth(value) {
    if (value == -1) {
      value = 11;
      this.year = this.year - 1;
    } else if (value == 12) {
      value = 0;
      this.year = this.year + 1;
    }
    this.month = value;
    this.updateMonthAndYear();
  }

  updateMonthAndYear() {
    this.monthName = this.monthNames[this.month];
    let toDay = new Date(this.year, this.month);
    this.weekname = new Date(this.year, this.month, this.today).getDay();
    this.startWeek = new Array(toDay.getDay()).fill(1).map((x, i) => i);
    this.prevMonth = new Array(new Date(this.year, this.month, 0).getDate()).fill(1).map((x, i) => i + 1).splice(-this.startWeek.length,this.startWeek.length);
    this.daysInMonth = new Array(new Date(this.year, this.month + 1, 0).getDate()).fill(1).map((x, i) => i + 1);
    this.nextMonth = new Array(new Date(this.year, this.month+2, 0).getDate()).fill(1).map((x, i) => i + 1);
  }
  closeCalender(){
    // this.show = false;
  }
  selectDate(d) {
    // console.log(new Date(this.year, this.month, d));
    // console.log(d+"-"+(this.month+1)+"-"+this.year);
    this.changeDate.emit((this.month+1)+"-"+d+"-"+this.year);
  }
  ngAfterViewInit() {
    // console.log(this.curDate);
  }
  showMonth(){
    
  }
}
