import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LandigButtonComponent } from './button.component'

describe('LandigButtonComponent', () => {
  let component: LandigButtonComponent
  let fixture: ComponentFixture<LandigButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandigButtonComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LandigButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
