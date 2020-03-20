import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressGridComponent } from './address-grid.component';

describe('AdressGridComponent', () => {
  let component: AddressGridComponent;
  let fixture: ComponentFixture<AddressGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
