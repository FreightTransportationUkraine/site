import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerCargoComponent } from './owner-cargo.component';

describe('OwnerCargoComponent', () => {
  let component: OwnerCargoComponent;
  let fixture: ComponentFixture<OwnerCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
