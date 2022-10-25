<template>
  <v-container >
      <v-row>

          <v-col>
            <v-sheet
              rounded="lg"
              min-height="80vh"
            >
                <h1>About Page</h1>
                <v-btn 
                    elevation="3"
                    @click="goHome"
                >goto home</v-btn>
            </v-sheet>
          </v-col>

      </v-row>

  </v-container>
</template>

<script>
export default {
    name: 'About',
    data(){

    },
    methods:{
        goHome(){
            this.$router.push('/home')
        }
    }
}
</script>

<style>

</style>