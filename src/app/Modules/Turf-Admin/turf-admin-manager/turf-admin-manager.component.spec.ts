import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurfAdminManagerComponent } from './turf-admin-manager.component';

describe('TurfAdminManagerComponent', () => {
  let component: TurfAdminManagerComponent;
  let fixture: ComponentFixture<TurfAdminManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurfAdminManagerComponent]
    });
    fixture = TestBed.createComponent(TurfAdminManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
