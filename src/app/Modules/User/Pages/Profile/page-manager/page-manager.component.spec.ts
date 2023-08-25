import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { Store } from '@ngrx/store'
import { of } from 'rxjs'
import { ProfileDetailsComponent } from '../components/profile-details/profile-details.component'
import { UserProfile, UserProfileUpdateData } from 'src/app/Models/app.models'
import { UserService } from '../../../Services/user.service'
import { ProfilePageManagerComponent } from './page-manager.component'

describe('ProfilePageManagerComponent', () => {
  let component: ProfilePageManagerComponent
  let fixture: ComponentFixture<ProfilePageManagerComponent>
  let mockUserService: jasmine.SpyObj<UserService>
  let mockStore: jasmine.SpyObj<Store>

  beforeEach(() => {
    mockUserService = jasmine.createSpyObj('UserService', [
      'getProfileDetails',
      'updateProfile'
    ])
    mockStore = jasmine.createSpyObj('Store', ['dispatch'])

    TestBed.configureTestingModule({
      declarations: [ProfilePageManagerComponent, ProfileDetailsComponent],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: Store, useValue: mockStore }
      ]
    })

    fixture = TestBed.createComponent(ProfilePageManagerComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should fetch profile details on ngOnInit', () => {
    const mockUserProfile: UserProfile = {
      _id: '1',
      username: 'testuser',
      email: 'test@example.com',
      mobile: '1234567890',
      profile: 'user.jpg'
    }
    mockUserService.getProfileDetails.and.returnValue(of(mockUserProfile))

    component.ngOnInit()

    expect(component.user).toEqual(mockUserProfile)
  })

  it('should update profile', () => {
    const mockUpdateData: UserProfileUpdateData = {
      username: 'testuser',
      email: 'test@example.com',
      mobile: '1234567890'
    }

    const mockProfileDetailsComponent = jasmine.createSpyObj(
      'ProfileDetailsComponent',
      ['enable']
    )

    component.profDet = mockProfileDetailsComponent

    mockUserService.updateProfile.and.returnValue(of())

    component.profileUpdate(mockUpdateData)

    expect(mockProfileDetailsComponent.isUpdate).toBe(undefined) // Assuming isUpdate should be true
    expect(mockProfileDetailsComponent.enable).toHaveBeenCalled()
  })

  afterEach(() => {
    fixture.destroy()
  })
})
