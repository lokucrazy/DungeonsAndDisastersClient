import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMToolbarComponent } from './dmtoolbar.component';

describe('DMToolbarComponent', () => {
  let component: DMToolbarComponent;
  let fixture: ComponentFixture<DMToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
