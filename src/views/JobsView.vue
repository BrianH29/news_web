<template>
  <h1>Jobs</h1>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('FETCH_JOBS'); 
  }
}
</script>

<style>

</style>