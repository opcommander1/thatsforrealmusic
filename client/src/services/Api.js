import axios from 'axios'

export default () => {
  return axios.create({
    //set the url for the api server location on port 5000
    baseURL: `https://radiant-river-69923.herokuapp.com/`
  })
}