export interface SharedState {
  showLoading: boolean
  errorMessage: string
  modalMessage: string
  showOTP: boolean
}

export const intilalState: SharedState = {
  showLoading: false,
  errorMessage: '',
  modalMessage: '',
  showOTP: false
}

export const SHARED_STATE_NAME = 'shared'
