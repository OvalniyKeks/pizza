import Vue from 'vue'

Vue.mixin({
  beforeCreate () {
    const options = this.$options
    if (options.api) {
      this.$api = options.api
    } else if (options.parent) {
      this.$api = options.parent.$api
    }
  }
})

class ApiService {
  axios = undefined

  constructor(axios) {
    this.axios = axios
  }

  deepCopy (data) {
    try {
      return JSON.parse(JSON.stringify(data))
    } catch (e) {
      return null
    }
  }

  jsonParse (data) {
    try {
      return JSON.parse(data)
    } catch (e) {
      console.log(e)
      return data
    }
  }

  jsonStringify (data) {
    try {
      return JSON.stringify(data)
    } catch (e) {
      return null
    }
  }

  convertPhoneToNumberOnly (data) {
    try {
      if (!data) {
        return null
      }
      let string = String(data)
      string = string.replace(/[^\d]/g, '')
      return string

    } catch (e) {
      return null
    }
  }

  appendFormData (data, fd) {
    let formData = fd
    if (!formData) {
      formData = new FormData()
    }
    if (typeof data === 'object') {
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          formData.append(key, data[key])
        }
      }
    }
    return formData
  }

  async getSomething (data) {
    return this.axios.get('', { params: { ...data } })
  }

  async setSomething (data) {
    return this.axios.post('', data)
  }
}

export default async ({ app }) => {
  app.api = new ApiService(app.axios)
}
