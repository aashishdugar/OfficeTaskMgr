import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContcatComponent } from './edit-contcat.component';

describe('EditContcatComponent', () => {
  let component: EditContcatComponent;
  let fixture: ComponentFixture<EditContcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
