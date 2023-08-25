import { ComponentFixture, TestBed } from '@angular/core/testing'
import { SuccessComponent } from './success.component'
import { SuccessPageData } from 'src/app/Models/app.models'
import { ActivatedRoute, Params } from '@angular/router'
import { BehaviorSubject, of } from 'rxjs'

describe('SuccessComponent', () => {
  let component: SuccessComponent
  let fixture: ComponentFixture<SuccessComponent>
  let activatedRoute: ActivatedRouteStub

  const mockSuccessPageData: SuccessPageData = {
    _id: '1234567890',
    bookDate: new Date(),
    time: '10:00 AM',
    user: {
      email: 'johndoe@example.com'
    }
  }

  class ActivatedRouteStub {
    private subject = new BehaviorSubject(this.testParams)

    queryParams = this.subject.asObservable()

    private _testParams: Params = {}

    get testParams () {
      return this._testParams
    }

    set testParams (params: Params) {
      this._testParams = params
      this.subject.next(params)
    }

    get snapshot () {
      return { queryParams: this.testParams }
    }

    // Use this method to update query parameters
    setQueryParams (params: Params) {
      this.testParams = params
    }

    // You can add more methods and properties as needed
  }

  beforeEach(async () => {
    activatedRoute = new ActivatedRouteStub()

    await TestBed.configureTestingModule({
      declarations: [SuccessComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessComponent)
    component = fixture.componentInstance
    component.sub$ = of().subscribe()
  })

  it('should create SuccessComponent', () => {
    expect(component).toBeTruthy()
  })

  it('should set details from query parameters', () => {
    activatedRoute.setQueryParams({ ...mockSuccessPageData })

    fixture.detectChanges()

    expect(component.details).toEqual(mockSuccessPageData)
  })
})
