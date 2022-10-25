<template>
  <v-row align-content="center">
    <v-col cols="12" sm="6" md="3" lg="3" 
      v-for="item in items" 
      :key="item.index"
      class="pa-3"
    >
      <MyCard :text="item.text"></MyCard>
      <!-- <v-btn outlined block>{{item.index}}</v-btn> -->
    </v-col>
  </v-row>
</template>

<script>
import MyCard from "@/components/MyCard"

export default {
  components:{MyCard},
  data(){
    return{
      items:[
        {index:1,text:'text1',pic:'',route:''},
        {index:2,text:'text2',pic:'',route:''},
        {index:3,text:'text3',pic:'',route:''},
        {index:4,text:'text4',pic:'',route:''},
        {index:5,text:'text5',pic:'',route:''},
        {index:6,text:'text6',pic:'',route:''},
        {index:7,text:'text7',pic:'',route:''},
      ],
    }
  }
}
</script>

<style>

</style>