<template>
  <div>
    <ol>
      <li v-for="show in showList" :key="show.id">
        <div> {{ show.title}} </div>

        <div>
          <span>{{ show.points }} points</span>
          <span> by {{ show.user }} </span>
          <span>{{ show.time_ago }} | </span>
          <span>comments : {{ show.comments_count }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  computed:{
    showList(){
      return this.$store.state.showList; 
    }
  },
  created(){
    this.$store.dispatch('FETCH_SHOW');
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