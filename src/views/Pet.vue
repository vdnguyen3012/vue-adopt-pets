<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
// import cats from '@/data/cats'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    // cats () { // the same way to load cats data from state from the mapState below
    //   return this.$store.state.cats
    // }
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id] // means this['cats'][index] or this['dogs'][index] from mapState
    this.animal = animal
  }
}
</script>
