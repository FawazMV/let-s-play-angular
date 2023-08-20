import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurfShimmerComponent } from './turf-shimmer.component';

describe('TurfShimmerComponent', () => {
  let component: TurfShimmerComponent;
  let fixture: ComponentFixture<TurfShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurfShimmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurfShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
