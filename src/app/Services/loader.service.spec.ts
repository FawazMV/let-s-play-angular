import { TestBed } from '@angular/core/testing'
import { LoaderService } from './loader.service'

describe('LoaderService', () => {
  let loaderService: LoaderService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderService]
    })
    loaderService = TestBed.inject(LoaderService)
  })

  it('should be created', () => {
    expect(loaderService).toBeTruthy()
  })

  it('should start with isLoading as false', () => {
    expect(loaderService.isLoading.value).toBe(false)
  })

  it('should show loading', () => {
    loaderService.show()
    expect(loaderService.isLoading.value).toBe(true)
  })

  it('should hide loading', () => {
    loaderService.hide()
    expect(loaderService.isLoading.value).toBe(false)
  })
})
