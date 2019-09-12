import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$getOneAddressFromZip = (zipcode) => {
  const url = `http://localhost:8000/api/v1/addresses/zip/get?zipcode=${zipcode}`
  return axios
    .get(url)
    .then((res) => {
      return res.data
    })
}
