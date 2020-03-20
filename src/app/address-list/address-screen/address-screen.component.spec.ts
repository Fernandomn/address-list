import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressScreenComponent } from './address-screen.component';

describe('AdressScreenComponent', () => {
  let component: AddressScreenComponent;
  let fixture: ComponentFixture<AddressScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
