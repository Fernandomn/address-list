import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressScreenComponent } from './adress-screen.component';

describe('AdressScreenComponent', () => {
  let component: AdressScreenComponent;
  let fixture: ComponentFixture<AdressScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
