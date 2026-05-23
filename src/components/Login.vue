<template>
  <img class="logo" src="../assets/restologo.jpg" />

  <h1>Login</h1>

  <div class="login">

    <input type="text" v-model="email" placeholder="Enter Email" />

    <input
      type="password"
      v-model="password"
      placeholder="Enter Password"
    />

    <button v-on:click="login">Login</button>

    <!-- ERROR MESSAGE -->
    <p class="error">{{ errorMessage }}</p>

    <p>
      <router-link to="sign-up">Sign Up</router-link>
    </p>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "LoginPage",

  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    };
  },

  methods: {

    async login() {

      this.errorMessage = ""

      try {

        let result = await axios.get(
          `http://localhost:5000/login?email=${this.email}&password=${this.password}`
        );

        localStorage.removeItem('user-info')

        localStorage.setItem(
          "user-info",
          JSON.stringify(result.data)
        );

        this.$router.push({ name: "HomePage" });

      }

      catch(error) {

        if(error.response && error.response.status === 404) {
          this.errorMessage = "Email does not exist"
        }

        else if(error.response && error.response.status === 401) {
          this.errorMessage = "Wrong password"
        }

        else {
          this.errorMessage = "Server error"
        }

        console.log(error)
      }
    },
  },

  mounted() {
    let user = localStorage.getItem('user-info');

    if(user){
      this.$router.push({ name: "HomePage" });
    }
  }
};
</script>

<style>
.error{
  color:red;
  margin-top:10px;
}
</style>