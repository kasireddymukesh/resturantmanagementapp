<template>
  <Header />
  <h1>Hello user, Welcome on Add Restaurant Page</h1>

  <form class="add">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" />
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" />
    <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" />
    <input type="text" placeholder="Enter Owner" v-model="restaurant.owner" />
    <input type="text" placeholder="Enter Rating" v-model="restaurant.rating" />

    <button type="button" @click="addRestaurant">
      Add New Restaurant
    </button>
  </form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'

export default {
  name: 'AddRestaurant',

  components: {
    Header
  },

  data() {
    return {
      restaurant: {
        name: '',
        address: '',
        contact: '',
        owner: '',
        rating: ''
      }
    }
  },

  methods: {
    async addRestaurant() {
      console.log(this.restaurant)

      const result = await axios.post(
        "http://localhost:5000/restaurants",
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
          owner: this.restaurant.owner,
          rating: this.restaurant.rating
        }
      )

      console.log("result:", result)

      if (result.status === 201) {
        this.$router.push({ name: 'HomePage' })
      }
    }
  },

  mounted() {
    let user = localStorage.getItem('user-info')

    if (!user) {
      this.$router.push({ name: "SignUp" })
    }
  }
}
</script>