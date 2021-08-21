<template>
  <div>
    <ol>
      <li v-for="newest in newestList" :key="newest.id">
        <div> {{ newest.title}} </div>

        <div>
          <span>{{ newest.points }} points</span>
          <span> by {{ newest.user }} </span>
          <span>{{ newest.time_ago }} | </span>
          <span>comments : {{ newest.comments_count }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  computed:{
    newestList(){
      return this.$store.state.newestList; 
    }
  },
  created(){
    this.$store.dispatch('FETCH_NEWEST');
  }
}
</script>

<style scoped>
h1{
  color:red;
}

li{
  margin: 10px 0px 10px 0px; 
}

span{
  color: #9c9898;
  font-size: 12px; 
}
</style>