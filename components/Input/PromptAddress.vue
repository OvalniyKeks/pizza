<template>
  <Card
    class="prompt"
    v-click-outside="close"
  >
    <div
      class="prompt-item"
      v-for="(item, i) of suggestions"
      :key="`suggestions-${i}`"
      @click="setSuggestion(item)"
    >
      {{item.unrestricted_value}}
    </div>
  </Card>
</template>

<script>
export default {
  props: {
    value: String
  },
  data () {
    return {
      token: 'be7230138bc717e92e640c8e5a53af7bf52c84b5',
      defaultUrl: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
      count: 10,
      language: 'ru',

      suggestions: null
    }
  },
  methods: {
    setSuggestion (suggestion) {
      this.$emit('input', suggestion.unrestricted_value)
      this.close()
    },
    getAddressList () {
      const query = {
        count: this.count,
        query: this.value
      }
      this.$axios.post(this.defaultUrl, query, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Token ${this.token}`,
        },
      }).then(res => {
        this.suggestions = res.data.suggestions
      })
    },
    close () {
      this.$emit('close')
    }
  },
  watch: {
    value (val) {
      if (val) {
        this.getAddressList()
      }
    }
  }
}
</script>
