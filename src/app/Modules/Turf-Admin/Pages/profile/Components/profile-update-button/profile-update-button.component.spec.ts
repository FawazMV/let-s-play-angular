import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdateButtonComponent } from './profile-update-button.component';

describe('ProfileUpdateButtonComponent', () => {
  let component: ProfileUpdateButtonComponent;
  let fixture: ComponentFixture<ProfileUpdateButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileUpdateButtonComponent]
    });
    fixture = TestBed.createComponent(ProfileUpdateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
