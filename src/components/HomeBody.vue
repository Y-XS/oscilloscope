<template>
  <v-container >
      <v-row>

          <v-col>
            <v-sheet
              rounded="lg"
              min-height="80vh"
            >
            
            </v-sheet>
          </v-col>

      </v-row>

  </v-container>
</template>

<script>
export default {
    name: 'HomeBody',
    data(){
        return{
            divs:[
                {id:1,color:'red',msg:'hello'},
                {id:2,color:'blue',msg:'world'},
                {id:3,color:'green',msg:'vue'},
            ]
        }
    }
}
</script>

<style>
    .main-box{
        height: 800px;
        width: 80%;
        background-color: powderblue;
    }
</style>