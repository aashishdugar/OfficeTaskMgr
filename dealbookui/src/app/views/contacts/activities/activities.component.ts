import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  constructor(private contactService: ContactsService) { }
  activityList: Observable<any[]>;
  ngOnInit(): void {
    this.activites();
  }
  activites() {

    this.activityList = this.contactService.contacts.pipe(map(o=>[].concat(...(o.filter(c=>c.activities.length>0)).map(a=>a.activities))));
  }


}
