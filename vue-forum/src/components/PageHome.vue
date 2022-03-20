<template>
<div class="col-full">
  <h1>Welcome to the forum</h1>
  <ThreadList :threads="threads"/>
</div>
</template>

<script>
import sourceDate from '@/data'
import ThreadList from './ThreadList'

export default {
  name: 'PageHome',
  components: {ThreadList},
  data () {
    return {
      threads: Object.values(sourceDate.threads),
      posts: sourceDate.posts,
      users: sourceDate.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
