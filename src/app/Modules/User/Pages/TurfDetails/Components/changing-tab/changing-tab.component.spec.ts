import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingTabComponent } from './changing-tab.component';

describe('ChangingTabComponent', () => {
  let component: ChangingTabComponent;
  let fixture: ComponentFixture<ChangingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangingTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
