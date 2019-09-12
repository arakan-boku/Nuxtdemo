import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$getmunicipalitiesJson = (prefecturesSelected) => {
  const url = `http://localhost:8000/api/v1/cities?prefCode = ${prefecturesSelected} `
  return axios
    .get(url)
    .then((res) => {
      return res.data
    })
}
