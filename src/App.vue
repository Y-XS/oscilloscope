<template>
  <v-app class="grey lighten-4">

    <Navbar/>

    <v-main class="grey lighten-4">
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

    <Footer/>
    

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components:{Navbar,Footer},
  data() {},
  methods:{}
};
</script>
