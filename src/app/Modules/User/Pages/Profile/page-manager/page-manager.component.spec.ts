import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProfilePageManagerComponent } from './page-manager.component'

describe('ProfilePageManagerComponent', () => {
  let component: ProfilePageManagerComponent
  let fixture: ComponentFixture<ProfilePageManagerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilePageManagerComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ProfilePageManagerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
