<template>
  <v-card >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="240px"
    ></v-img>
    <span>{{text}}</span>
  </v-card>
</template>

<script>
export default {
    props:{
        pic:String,
        text:{type:String,default:"this is default text"},
        route:String,
    },

}
</script>

<style>

</style>