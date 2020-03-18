import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressGridComponent } from './adress-grid.component';

describe('AdressGridComponent', () => {
  let component: AdressGridComponent;
  let fixture: ComponentFixture<AdressGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
