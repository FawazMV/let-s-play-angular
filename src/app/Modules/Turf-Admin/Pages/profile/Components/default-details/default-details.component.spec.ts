import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDetailsComponent } from './default-details.component';

describe('DefaultDetailsComponent', () => {
  let component: DefaultDetailsComponent;
  let fixture: ComponentFixture<DefaultDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultDetailsComponent]
    });
    fixture = TestBed.createComponent(DefaultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
