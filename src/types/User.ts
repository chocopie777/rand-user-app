export interface User {
  email: string,
  gender: string,
  location: {
    city: string,
    country: string,
    street: {
      name: string,
      number: number
    }
  },
  name: {
    first: string,
    last: string,
  },
  nationality: string,
  phone: string,
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  }
}
