<template>
  <Header />
  <h1>Hello user, Welcome on Update resturant Page</h1>
  <form class = "add">
    <input type="text" name="name" placeholder="Enter Name" v-model= "resturant.name" />
    <input type="text" name="address" placeholder="Enter address" v-model="resturant.address" />
    <input type="text" name="contact" placeholder="Enter contact" v-model = "resturant.contact" />

    <button type="button" v-on:click="updateResturant">Update Restaurant</button>
  </form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
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
  methods:{
  async updateResturant(){

    console.warn(this.resturant);

    const result = await axios.put(
      "http://localhost:3000/resturantlist/" + this.$route.params.id,
      {
        name: this.resturant.name,
        address: this.resturant.address,
        contact: this.resturant.contact,
      }
    );

    if(result.status == 200){
      this.$router.push({ name:'HomePage' });
    }
  }
},

 async mounted() {
    let user = localStorage.getItem('user-info');

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get('http://localhost:3000/resturantlist/'+ this.$route.params.id)
    //console.warn(this.$route.params.id)
    console.warn(result.data)
    this.resturant=result.data
  }
}
</script>