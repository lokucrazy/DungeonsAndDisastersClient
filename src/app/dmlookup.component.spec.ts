import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmlookupComponent } from './dmlookup.component';

describe('DmlookupComponent', () => {
  let component: DmlookupComponent;
  let fixture: ComponentFixture<DmlookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmlookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmlookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
