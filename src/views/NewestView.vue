<template>
  <h1>Newest</h1>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('FETCH_NEWEST');
  }
}
</script>

<style>

</style>