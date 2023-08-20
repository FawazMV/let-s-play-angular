import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayShowComponent } from './day-show.component';

describe('DayShowComponent', () => {
  let component: DayShowComponent;
  let fixture: ComponentFixture<DayShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
