import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurfLoginComponent } from './turf-login.component';

describe('TurfLoginComponent', () => {
  let component: TurfLoginComponent;
  let fixture: ComponentFixture<TurfLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurfLoginComponent]
    });
    fixture = TestBed.createComponent(TurfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
