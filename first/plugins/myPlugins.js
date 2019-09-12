import Vue from 'vue'

Vue.prototype.$encodeBase64FromFile = (fileObj, isImg) => {
  const reader = new FileReader()
  let b64text = ''
  while (!reader.result) {
    reader.onload = () => {
      b64text = reader.result
    }
    reader.readAsDataURL(fileObj)
  }
  return b64text
}
