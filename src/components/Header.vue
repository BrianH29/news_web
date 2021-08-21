<template>
  <div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <img src="@/assets/logo.png" style="width:50px; height:50px" alt="Kitten">
        </b-navbar-brand>
      </b-navbar>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/news">News</b-nav-item>
          <b-nav-item href="/newest">Newest</b-nav-item>
          <b-nav-item href="/ask">Ask</b-nav-item>
          <b-nav-item href="/show">Show</b-nav-item>
          <b-nav-item href="/jobs">Jobs</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>