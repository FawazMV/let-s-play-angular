import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TurfRegisterPageManagerComponent } from './page-manager.component'

describe('TurfRegisterPageManagerComponent', () => {
  let component: TurfRegisterPageManagerComponent
  let fixture: ComponentFixture<TurfRegisterPageManagerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurfRegisterPageManagerComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TurfRegisterPageManagerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
