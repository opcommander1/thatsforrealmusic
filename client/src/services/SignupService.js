import Api from '@/services/Api'

export default {
  signup (credentials) {
    return Api().post('signup', credentials)
  },

  login (credentials) {
    return Api().post('login', credentials)
  },

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