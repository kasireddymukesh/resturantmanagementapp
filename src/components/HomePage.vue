<template>
  <Header />

  <h1>Hello {{ name }}, Welcome on Home Page</h1>

  <table border="1">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Contact</th>
      <th>Address</th>
      <th>Owner</th>
      <th>Rating</th>
      <th>Actions</th>
      
    </tr>

    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>{{item.owner}}</td>
      <td>{{item.rating}}</td>
  
      <td>
      <router-link :to="'/update/' + item.id">Update</router-link>
      <button v-on:click="deleteResturant(item.id)">Delete</button>
      </td>
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
      restaurants: []
    }
  },

  components: {
    Header
  },
  methods:{
  async deleteResturant(id)
  {
    let result = await axios.delete(
      'http://localhost:5000/restaurants/' + id
    );

    console.warn(result);

    if(result.status == 200){
      this.loadData();
    }
  },

  async loadData() {
  let user = localStorage.getItem('user-info')

  if (!user) {
    this.$router.push({ name: "SignUp" })
    return
  }

  this.name = JSON.parse(user).name

  let result = await axios.get('http://localhost:5000/restaurants')

  console.log("DATA:", result.data)

  // IMPORTANT FIX
  this.restaurants = result.data
}
},
  async mounted() {
  this.loadData()
}
}
</script>
<style>
td{
  width:16px;
  height:40px;
}
</style>