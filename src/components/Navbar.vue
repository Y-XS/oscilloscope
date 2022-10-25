<template>
  <nav>
    <v-app-bar elevate-on-scroll app class="grey lighten-4" light>
      <v-app-bar-nav-icon @click="drawer=!drawer">
      </v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase deep-purple--text text--lighten-2">
        <span class="font-weight-light">Todo</span>
        <span class="font-weight-black">XYS</span>
      </v-app-bar-title>
      <v-spacer/>
      <v-btn text class="deep-purple--text text--lighten-2">
        <span>Log Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      drawer:false,
      links:[
        {icon:'mdi-view-dashboard', text:'Dashboard', route:'/'},
        {icon:'mdi-folder', text:'My Projects', route:'/projects'},
        {icon:'mdi-account-tie', text:'Team', route:'/team'},
      ],
    }
  }
}
</script>

<style>

</style>