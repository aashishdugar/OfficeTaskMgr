import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { Contactsdata } from '../sampledata/contactsdata';
import { AngularFireAuth } from '@angular/fire/auth';
import { EventEmitterService } from './event-emitter.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor {

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private emService: EventEmitterService
    ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.emService.showHideLoader(true);
    req = req.clone({
      setHeaders: {
        auothToken: `${localStorage.getItem('token')}`
      }
    });
    return next.handle(req).pipe(
      finalize(() => this.emService.showHideLoader(false))
  );;
  }
}
