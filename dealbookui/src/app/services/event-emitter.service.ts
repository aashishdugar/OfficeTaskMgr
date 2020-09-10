import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface SideWindow {
  isTrue: boolean,
  component: any,
  title: string
}
@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }

  private _sideWindow = new BehaviorSubject<SideWindow>({isTrue:false, component:"", title:""});
  readonly sideWindow = this._sideWindow.asObservable();

  private _loader = new BehaviorSubject<boolean>(false);
  readonly loader = this._loader.asObservable();
  
  private _openrow = new BehaviorSubject<any>(null);
  readonly openrow = this._openrow.asObservable();
  
  private _createContact = new BehaviorSubject<any>(null);
  readonly createContact = this._createContact.asObservable();

  public _updateContact = new BehaviorSubject<any>(false);
  readonly updateContact = this._updateContact.asObservable();
  
  private _updateActivity = new BehaviorSubject<any>(false);
  readonly updateActivity = this._updateActivity.asObservable();

  private _updateWidgit = new BehaviorSubject<any>(false);
  readonly updateWidgit = this._updateWidgit.asObservable();

  private _curPath = new BehaviorSubject<any>(null);
  readonly curPath = this._curPath.asObservable();

  public _scrollToItem = new BehaviorSubject<any>(null);
  readonly scrollToItem = this._curPath.asObservable();

  public _scrollToTop = new BehaviorSubject<any>(null);
  readonly scrollToTop = this._curPath.asObservable();
  
  setScrollToTop(item) {
    console.log("Set Scrool To Item:"+item);
    this._scrollToTop.next(item);
  }
  private isHierarchyOpen = false;
  setScrollToItem(item) {
    //console.log("Set Scrool To Item:"+item);
    this._scrollToItem.next(item);
  }
  setCurPath(path) {
    this._curPath.next(path);
  }
  showHideWindow(isTrue:boolean, component: any, title:string) {
    this._sideWindow.next({isTrue, component, title});
  }
  showHideLoader(isTrue:boolean) {
    this._loader.next(isTrue);
  }
  setOpenRow(contact) {
    this._openrow.next(contact);
  }
  addContact(contact) {
    this._createContact.next(contact);
  }

  updateContacts() {
    this._updateContact.next(!this._updateContact.value);
  }

  updateActivities() {
    this._updateActivity.next(!this._updateActivity.value);
  }

  updateWidgits() {
  
    this._updateWidgit.next(!this._updateWidgit.value);
  }

  setIsHierarchyOpen(isOpen) {
    this.isHierarchyOpen = isOpen;
  }
  getIsHierarchyOpen() {
    return this.isHierarchyOpen;
  }
}
