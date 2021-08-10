import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCargoComponent } from './driver-cargo.component';

describe('DriverCargoComponent', () => {
  let component: DriverCargoComponent;
  let fixture: ComponentFixture<DriverCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
