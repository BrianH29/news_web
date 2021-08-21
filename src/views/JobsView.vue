<template>
  <div>
    <ol>
      <li v-for="jobs in jobsList" :key="jobs.id">
        <div> {{ jobs.title}} </div>

        <div>
          <span>{{ jobs.points }} points</span>
          <span> by {{ jobs.user }} </span>
          <span>{{ jobs.time_ago }} | </span>
          <span>comments : {{ jobs.comments_count }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  computed:{
    jobsList(){
      return this.$store.state.jobsList; 
    }
  },
  created(){
    this.$store.dispatch('FETCH_JOBS');
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