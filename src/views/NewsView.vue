<template>
  <div>
    <ol>
      <li v-for="news in news" :key="news.id">
        <!-- <div>{{ news.title }}</div>
        <span>{{ news.points }} points</span>
        <span> by {{ news.user }} </span> -->
        <div> {{ news.title}} </div>
        <div>
          <span>{{ news.points }} points</span>
          <span> by {{ news.user }} </span>
          <span>{{ news.time_ago }} | </span>
          <span>comments : {{ news.comments_count }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    news(){
      return this.$store.state.news;
    }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS'); 
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