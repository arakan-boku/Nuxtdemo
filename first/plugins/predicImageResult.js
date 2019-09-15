import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$predictImageResult = (base64Image) => {
  const url = `http://localhost:8000/api/v1/image/classification?img=${base64Image}`
  return axios
    .get(url)
    .then((res) => {
      return res.data.result
    })
}
