import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoManageComponent } from './photo-manage.component';

describe('PhotoManageComponent', () => {
  let component: PhotoManageComponent;
  let fixture: ComponentFixture<PhotoManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
