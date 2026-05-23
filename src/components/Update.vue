<template>
  <Header />
  <h1>Hello user, Welcome on Update restaurant Page</h1>

  <form class="add">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" />
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" />
    <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" />
    <input type="text" placeholder="Enter Owner" v-model="restaurant.owner" />
    <input type="text" placeholder="Enter Rating" v-model="restaurant.rating" />

    <button type="button" @click="updateRestaurant">
      Update Restaurant
    </button>
  </form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'

export default {
  name: 'UpdateRestaurant',

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
    async updateRestaurant() {
      console.log(this.restaurant)

      const result = await axios.put(
        "http://localhost:5000/restaurants/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
          owner: this.restaurant.owner,
          rating: this.restaurant.rating
        }
      )

      if (result.status === 200) {
        this.$router.push({ name: 'HomePage' })
      }
    }
  },

  async mounted() {
    let user = localStorage.getItem('user-info')

    if (!user) {
      this.$router.push({ name: "SignUp" })
      return
    }

    const result = await axios.get(
      "http://localhost:5000/restaurants/" + this.$route.params.id
    )

    console.log(result.data)

    this.restaurant = result.data
  }
}
</script>