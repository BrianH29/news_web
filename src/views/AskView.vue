<template>
  <h1>Ask</h1>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('FETCH_ASK'); 
  }

}
</script>

<style>

</style>