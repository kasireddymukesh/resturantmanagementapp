<template>
  <Header />
  <h1>Hello user, Welcome on Update resturant Page</h1>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'UpdateResturant',

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