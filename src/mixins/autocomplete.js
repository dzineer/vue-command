// @vue/component
export default {
  provide () {
    return {
      setCursor: this.setCursor
    }
  },

  data: () => ({
    local: {
      // Current cursor position at Stdin
      cursor: 0
    }
  }),

  watch: {
    cursor () {
      this.local.cursor = this.cursor
    },

    'local.cursor' () {
      this.$emit('update:cursor', this.local.cursor)
    }
  },

  methods: {
    // Calls the user given autocompletion resolver
    autocomplete () {
      // Check if Stdin is not empty and autocompletion resolver is given
      if (typeof this.autocompletionResolver === 'function') {
        // Call user autocompletion function
        this.autocompletionResolver(this.local.stdin, this.local.cursor)
      }
    },

    setCursor (cursor) {
      this.local.cursor = cursor
    }
  }
}
