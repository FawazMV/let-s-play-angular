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
