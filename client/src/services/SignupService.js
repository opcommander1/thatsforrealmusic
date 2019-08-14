import Api from '@/services/Api'

export default {
  //Post new user data to server database
  signup (credentials) {
    return Api().post('signup', credentials)
  },
  //Send user data to server database
  login (credentials) {
    return Api().post('login', credentials)
  },
  //Send user data for update to the server database
  updatepassword (credentials) {
    return Api().put('passwordreset', credentials)
  }
}

// SignupService.signup({
//   first_name: 'Shereal',
//   last_name: 'McNeal',
//   email: 'smcneal@hotmail.com',
//   username: 'smcneal',
//   password: 'fleet'
// })