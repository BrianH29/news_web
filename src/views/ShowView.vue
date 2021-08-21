<template>
  <h1>ShowView</h1>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('FETCH_SHOW');
  }
}
</script>

<style>

</style>