import axios from 'axios'

export default function $getOneAddressFromZip(zipcode)  {
  const url = `http://localhost:8000/api/v1/addresses/zip/get?zipcode=${zipcode}`
  return axios
    .get(url)
    .then((res) => {
      return res.data
    })
}
