import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'

import { TestBed } from '@angular/core/testing'

import { intilalState as shared } from '../../shared/redux/shared.state'
import { initialState as turfs } from '../store/turfs.state'
import { initialState as user } from '../Pages/Auth/store/auth.state'

import { UserService } from './user.service'
import { AppState } from 'src/app/store/app.state'
import { provideMockStore } from '@ngrx/store/testing'
import { UserProfile, UserProfileUpdateData } from 'src/app/Models/app.models'

describe('UserAuthService', () => {
  let service: UserService
  let testingController: HttpTestingController
  const initialState: AppState = {
    shared: shared,
    turfs: turfs,
    userAuth: user
  }
  const url = 'https://let-s-play-user-service.onrender.com'
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({ initialState })]
    })
    service = TestBed.inject(UserService)
    testingController = TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  afterEach(() => {
    testingController.verify()
  })

  it('should retrieve profile details', () => {
    const dummyProfile: UserProfile = {
      _id: '1',
      username: 'testuser',
      email: 'test@example.com',
      mobile: '1234567890',
      profile: 'user.jpg'
    }

    service.getProfileDetails().subscribe(profile => {
      expect(profile).toEqual(dummyProfile)
    })

    const req = testingController.expectOne(`${url}/profile/user-details`)
    expect(req.request.method).toBe('GET')
    req.flush(dummyProfile)
  })

  it('should update profile details', () => {
    const updatedProfile: UserProfileUpdateData = {
      username: 'newusername',
      email: 'newemail@example.com',
      mobile: '9876543210'
    }
    const dummyUpdatedProfile: UserProfile = {
      ...updatedProfile,
      _id: '1',
      profile: 'user.jpg'
    }

    service.updateProfile(updatedProfile).subscribe(profile => {
      expect(profile).toEqual(dummyUpdatedProfile)
    })

    const req = testingController.expectOne(`${url}/profile/update`)
    expect(req.request.method).toBe('PUT')
    req.flush(dummyUpdatedProfile)
  })
})
