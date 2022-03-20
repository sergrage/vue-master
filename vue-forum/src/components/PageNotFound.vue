<template>
  <div class="col-full">
    <h1>Not Found</h1>
      <router-link :to="{name: 'Home'}">
          <span :class="$style.textLarge">go home</span>
      </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style module>
  .textLarge {
    font-size: 50px;
    font-weight: 100;
  }
</style>
