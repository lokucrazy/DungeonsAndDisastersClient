import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchUserInfoComponent } from './fetch-user-info.component';

describe('FetchUserInfoComponent', () => {
  let component: FetchUserInfoComponent;
  let fixture: ComponentFixture<FetchUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
