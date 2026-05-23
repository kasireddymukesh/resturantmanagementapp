<template>
  <Header />

  <h1>User Profile</h1>

  <div class="profile">

    <h3>Name: {{ user.name }}</h3>

    <h3>Email: {{ user.email }}</h3>

    <h3>Password: {{ user.password }}</h3>

  </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'

export default {
  name: 'ProfilePage',

  components: {
    Header
  },

  data() {
    return {
      user: {}
    }
  },

  async mounted() {

    let localUser = localStorage.getItem('user-info')

    if (!localUser) {
      this.$router.push({ name: 'SignUp' })
      return
    }

    localUser = JSON.parse(localUser)

    // API CALL
    const result = await axios.get(
      "http://localhost:5000/users/" + localUser.id
    )

    console.log(result.data)

    this.user = result.data
  }
}
</script>

<style>
.profile{
  width:400px;
  margin:auto;
  border:1px solid #ccc;
  padding:20px;
  text-align:left;
}
</style>