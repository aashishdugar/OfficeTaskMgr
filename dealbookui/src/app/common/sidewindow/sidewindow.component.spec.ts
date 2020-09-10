import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidewindowComponent } from './sidewindow.component';

describe('SidewindowComponent', () => {
  let component: SidewindowComponent;
  let fixture: ComponentFixture<SidewindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidewindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidewindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
