<template>
  <AppHeader />
  <h1>Hello user, Welcome on Home Page</h1>
</template>

<script>
import AppHeader from './Header.vue'

export default {
  name: 'HomePage',

  components: {
    AppHeader
  },

  mounted() {
    let user = localStorage.getItem('user-info');

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  }
}
</script>