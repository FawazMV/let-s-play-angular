import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AllTurfsPageManagerComponent } from './page-manager.component'

describe('AllTurfsPageManagerComponent', () => {
  let component: AllTurfsPageManagerComponent
  let fixture: ComponentFixture<AllTurfsPageManagerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllTurfsPageManagerComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(AllTurfsPageManagerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
