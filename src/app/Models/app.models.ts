export interface TokenState {
  token: string
}

export interface UserLoginInput {
  email: string
  password: string
}

export interface Turf {
  _id: string
  courtName: string
  email: string
  mobile: string
  password: string
  images: images[]
  location: string
  loction_Details: string
  distric: string
  state: string
  Holiday: string
  event: string
  Price: number
  closingTime: string
  enquiryNumber: string
  openingTime: string
  rating: number
}

export interface images {
  location: string
}

export interface UserProfile {
  _id: string
  username: string
  email: string
  mobile: string
  profile?: string
}

export interface UserProfileUpdateData {
  username: string
  email: string
  mobile: string
}

export interface MapBoxResutl {
  features: Features[]
}

export interface Features {
  context: Context[]
  text: string
  place_name: string
}
interface Context {
  id: string
  text: string
}

export interface TurfRegisterDetails {
  email: string
  mobile: string
  password: string
  event: string
  loction_Details: string
  location: string
  images: File[]
  state: string
  distric: string
  courtName: string
  otp?: number
}

export interface SuccessPageData {
  _id: string
  bookDate: Date
  time: string
  user: {
    email: string
  }
}

export interface BookingsData {
  _id: string
  turf: {
    courtName: string
  }
  bookDate: Date
  time: string
  payment: string
  createdAt: string
}

export interface Logindata {
  email: string
  password: string
}

export interface TurfProfileState {
  _id: string
  courtName: string
  email: string
  mobile: string
  images: images[]
  location: string
  loction_Details: string
  distric: string
  state: string
  Holiday?: string
  event: string
  Price?: number | string
  closingTime?: string
  enquiryNumber?: string
  openingTime?: string
}

export interface TurfProfileUpdateState {
  courtName: string
  images: images[]
  loction_Details: string
  Holiday: string
  Price: string
  closingTime: string
  enquiryNumber: string
  openingTime: string
}
