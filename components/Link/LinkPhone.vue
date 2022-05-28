<template>
  <a
    :href="`tel:${value}`"
    class="link"
    :style="`color:${color}`"
    v-bind="$attrs"
  >
    {{ maskPhone }}
  </a>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number]
    },
    addPlus: Boolean,
    color: String
  },
  computed: {
    maskPhone () {
      let phone = String(this.value)
      phone = this.clearPhone(phone)
      phone = this.formatPhone(phone)

      if (this.addPlus) {
        if (phone && phone.indexOf('+') === -1) {
          phone = '+7' + phone.substring(1, phone.length)
        }
      }
      return phone
    }
  },
  methods: {
    formatPhone (data) {
      try {
        const stringArr = data.split('')

        if (stringArr[0] === '8') {
          stringArr.splice(1, 0, ' ')
          stringArr.splice(2, 0, '(')
          stringArr.splice(6, 0, ')')
          stringArr.splice(7, 0, ' ')
          stringArr.splice(11, 0, '-')
          stringArr.splice(14, 0, '-')
        } else {
          stringArr.splice(1, 0, ' ')
          stringArr.splice(2, 0, '(')
          stringArr.splice(6, 0, ')')
          stringArr.splice(7, 0, ' ')
          stringArr.splice(11, 0, '-')
          stringArr.splice(14, 0, '-')
        }
        data = stringArr.join('')
        return data
      } catch (err) {
        console.error(err)
        return null
      }
    },
    clearPhone (data) {
      return data.replace(/[^\d]/g, '').replace(/\s/g, '')
    }
  }
}
</script>
