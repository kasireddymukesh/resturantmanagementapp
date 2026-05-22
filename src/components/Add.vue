<template>
  <Header />
  <h1>Hello user, Welcome on Add Resturant Page</h1>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'AddResturant',

  components: {
    Header
  },

  mounted() {
    let user = localStorage.getItem('user-info');

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  }
}
</script>