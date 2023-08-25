import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LayoutPageManagerComponent } from './page-manager.component'

describe('LayoutPageManagerComponent', () => {
  let component: LayoutPageManagerComponent
  let fixture: ComponentFixture<LayoutPageManagerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutPageManagerComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LayoutPageManagerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
