<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from '../../vuex/dist/vuex.common'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    const store = this.$store
    console.log(store)
  },
  computed: mapGetters([
  ]),
  methods: mapActions([
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
