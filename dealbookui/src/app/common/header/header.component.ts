import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ minHeight: 80, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HeaderComponent {
  @Output('menuExpand') menuExpand = new EventEmitter<boolean>();
  isExpand = false;
  showlogout = false;
  user;
  Username:any = "";
  constructor(public authService: AuthService){
    //authService.afAuth.user.subscribe(user=> this.user = user );
this.Username = localStorage.getItem('userName');
  }
  expandMenu() {
    this.isExpand = !this.isExpand;
    this.menuExpand.emit(this.isExpand);
  }
}
