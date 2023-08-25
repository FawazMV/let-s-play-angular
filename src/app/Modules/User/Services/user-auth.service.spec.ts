import { TestBed, inject } from '@angular/core/testing'
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'
import { UserAuthServiceService } from './user-auth.service'
import { TokenState } from 'src/app/Models/app.models'

describe('UserAuthServiceService', () => {
  let service: UserAuthServiceService
  let httpMock: HttpTestingController
  const url = 'https://let-s-play-user-service.onrender.com'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserAuthServiceService]
    })
    service = TestBed.inject(UserAuthServiceService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should send a login request', () => {
    const mockToken: TokenState = { token: 'mockToken' }

    service.login('test@example.com', 'password').subscribe(response => {
      expect(response).toEqual(mockToken)
    })

    const req = httpMock.expectOne(`${url}/login`)
    expect(req.request.method).toBe('POST')
    req.flush(mockToken)
  })

  it('should send a signup request', () => {
    const userData = {
      email: 'test@example.com',
      password: 'password',
      username: 'testuser',
      mobile: '1234567890'
    }

    service
      .signup(
        userData.email,
        userData.password,
        userData.username,
        userData.mobile
      )
      .subscribe()

    const req = httpMock.expectOne(`${service['url']}/register-user`)
    expect(req.request.method).toBe('POST')
    expect(req.request.body).toEqual(userData)
  })

  // Add more test cases for other methods similarly

  // You can also write tests for the error cases using httpMock.expectOne().error().
})
