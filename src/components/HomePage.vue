<template>
  <Header />

  <h1>Hello {{ name }}, Welcome on Home Page</h1>

  <table border="1">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Contact</th>
      <th>Address</th>
      <td>Actions</td>
    </tr>

    <tr v-for="item in resturant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td><router-link :to="'/update/' + item.id">Update</router-link></td>
    </tr>
  </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'

export default {
  name: 'HomePage',

  data() {
    return {
      name: '',
      resturant: []
    }
  },

  components: {
    Header
  },

  async mounted() {
    let user = localStorage.getItem('user-info');

    if (!user) {
      this.$router.push({ name: "SignUp" });
    } else {
      this.name = JSON.parse(user).name;
    }

    let result = await axios.get('http://localhost:3000/resturantlist');

    console.warn(result);

    this.resturant = result.data;
  }
}
</script>
<style>
td{
  width:16px;
  height:40px;
}
</style>