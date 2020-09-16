import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigunpComponent } from './sigunp.component';

describe('SigunpComponent', () => {
  let component: SigunpComponent;
  let fixture: ComponentFixture<SigunpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigunpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigunpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
