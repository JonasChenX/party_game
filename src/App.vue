<template>
  <Header/>
  <router-view/>
  <Footer />
</template>

<script>
import '@/assets/tailwind.css'
import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'
export default {
  components:{
    Header,
    Footer
  }
}
</script>


<style lang="scss">
@import '@/style/components.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
