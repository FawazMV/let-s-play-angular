import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TurfDetailsPageManagerComponent } from './page-manager.component'

describe('TurfDetailsPageManagerComponent', () => {
  let component: TurfDetailsPageManagerComponent
  let fixture: ComponentFixture<TurfDetailsPageManagerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurfDetailsPageManagerComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TurfDetailsPageManagerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
