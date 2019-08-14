import axios from 'axios'

export default () => {
  return axios.create({
    //set the url for the api server location on port 5000
    baseURL: `http://localhost:5000/`
  })
}