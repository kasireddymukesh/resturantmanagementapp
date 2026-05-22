<template>
  <Header />
  <h1>Hello user, Welcome on Update resturant Page</h1>
  <form class = "add">
    <input type="text" name="name" placeholder="Enter Name" v-model= "resturant.name" />
    <input type="text" name="address" placeholder="Enter address" v-model="resturant.address" />
    <input type="text" name="contact" placeholder="Enter contact" v-model = "resturant.contact" />

    <button type="button" v-on:click="addResturant">Update Restaurant</button>
  </form>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'UpdateResturant',

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

  mounted() {
    let user = localStorage.getItem('user-info');

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  }
}
</script>