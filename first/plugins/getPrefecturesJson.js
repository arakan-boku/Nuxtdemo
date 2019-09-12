import axios from 'axios'

export default ({ app }, inject) => {
  app.$getPrefecturesJson = () => {
    return axios
      .get('http://localhost:8000/api/v1/prefectures')
      .then((res) => {
        return res.data
      })
  }
}
