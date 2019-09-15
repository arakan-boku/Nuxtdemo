import axios from 'axios'

export default function $getmunicipalitiesJson(prefecturesSelected) {
  const url = `http://localhost:8000/api/v1/cities?prefCode = ${prefecturesSelected} `
  return axios
    .get(url)
    .then((res) => {
      return res.data
    })
}
