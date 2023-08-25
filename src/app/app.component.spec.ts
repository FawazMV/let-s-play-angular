import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore, MockStore } from '@ngrx/store/testing'
import { AppComponent } from './app.component'
import { LoaderService } from './Services/loader.service'
import { BehaviorSubject } from 'rxjs'
import {
  fetchAllTurfs,
  turfAutoLogin
} from './Modules/User/store/turfs.actions'
import { autoLogin } from './Modules/User/Pages/Auth/store/auth.actions'
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './Modules/shared/shared.module'
import { AppState } from './store/app.state'
import { intilalState as shared } from './Modules/shared/redux/shared.state'
import { initialState as turfs } from './Modules/User/store/turfs.state'
import { initialState as user } from './Modules/User/Pages/Auth/store/auth.state'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent
  let store: MockStore
  let loaderService: LoaderService

  const initialState: AppState = {
    /* Define your initial state here */
    shared: shared,
    turfs: turfs,
    userAuth: user
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: LoaderService,
          useValue: { isLoading: new BehaviorSubject<boolean>(false) }
        }
      ],
      imports: [AppRoutingModule, SharedModule]
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    store = TestBed.inject(MockStore)
    loaderService = TestBed.inject(LoaderService)
  })

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })

  it('should dispatch actions on ngOnInit', () => {
    const dispatchSpy = spyOn(store, 'dispatch') // Spy on the method once

    component.ngOnInit()

    expect(dispatchSpy).toHaveBeenCalledWith(turfAutoLogin())
    expect(dispatchSpy).toHaveBeenCalledWith(fetchAllTurfs())
    expect(dispatchSpy).toHaveBeenCalledWith(autoLogin())
  })

  it('should set showLoading from the LoaderService', () => {
    const loaderServiceValue = true
    loaderService.isLoading.next(loaderServiceValue)

    fixture.detectChanges() // Trigger change detection

    expect(component.showLoading.value).toBe(loaderServiceValue)
  })
})
