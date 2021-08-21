<template>
    <div>
    <ol>
      <li v-for="ask in askList" :key="ask.id">
        <div> {{ ask.title}} </div>
        <div>
          <span>{{ ask.points }} points</span>
          <span> by {{ ask.user }} </span>
          <span>{{ ask.time_ago }} | </span>
          <span>comments : {{ ask.comments_count }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  computed : {
    askList(){
      return this.$store.state.askList;
    }
  },
  created(){
    this.$store.dispatch('FETCH_ASK'); 
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