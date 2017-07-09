<template>
  <div class="row">
    <div class="col">
      <h1>Demonstration of a hierarchical variant aggregation</h1>
      <h2>Variants</h2>
      <pre>{{JSON.stringify(variants)}}</pre>
      <h2>Tree</h2>
      <pre>{{JSON.stringify(tree, null, 2)}}</pre>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'hello-world',
    computed: {
      ...mapState(['variants']),
      ...mapGetters(['tree'])
    }
  }
</script>
