<template>
  <Header />
  <h1>Hello user, Welcome on Add Restaurant Page</h1>

  <form class = "add">
    <input type="text" name="name" placeholder="Enter Name" v-model= "resturant.name" />
    <input type="text" name="address" placeholder="Enter address" v-model="resturant.address" />
    <input type="text" name="contact" placeholder="Enter contact" v-model = "resturant.contact" />

    <button type="button" v-on:click="addResturant">Add New Restaurant</button>
  </form>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'AddRestaurant',

  components: {
    Header
  },
  data(){
    return {
        resturant : {
            name :'',
            address:'',
            contact:''
        }
    }
  },
  methods:{
    addResturant(){
        console.warn(this.resturant)
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  }
}
</script>