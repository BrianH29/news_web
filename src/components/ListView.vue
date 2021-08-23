<template>
  <div>
    <ol>
      <li v-for="item in itemList" :key="item.id">
        <div> {{ item.title}} </div>

        <div>
          <span>{{ item.points }} points</span>
          <span> by {{ item.user }} </span>
          <span>{{ item.time_ago }} | </span>
          <span>comments : {{ item.comments_count }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    itemList(){
      const name = this.$route.name; 
      
      switch(name){
        case 'news' :
          return this.$store.state.newsList;
        
        case 'newest' :
          return this.$store.state.newestList;
        
        case 'ask' :
          return this.$store.state.askList;
        
        case 'show' :
          return this.$store.state.showList;
        
        case 'jobs' :
          return this.$store.state.jobsList;
      }
      
    }
  },
  created() {
    const name = this.$route.name; 

    switch(name){
        case 'news' :
          this.$store.dispatch('FETCH_NEWS');
          break;
        case 'newest' :
          this.$store.dispatch('FETCH_NEWEST');
        break;
        case 'ask' :
          this.$store.dispatch('FETCH_ASK');
          break;
        case 'show' :
          this.$store.dispatch('FETCH_SHOW');
          break;
        case 'jobs' :
          this.$store.dispatch('FETCH_JOBS');
          break;
      }

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