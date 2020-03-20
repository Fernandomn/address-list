import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAddressModalComponent } from './remove-address-modal.component';

describe('RemoveAddressComponent', () => {
  let component: RemoveAddressModalComponent;
  let fixture: ComponentFixture<RemoveAddressModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveAddressModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
