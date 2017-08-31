<template>
  <v-app light>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon left>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
      class="hidden-sm-and-up"
      @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>Choo-Choo-Trains</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title">
          <v-icon left>{{item.icon}}</v-icon>{{item.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view>

      </router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: false,
        menuItems: [
          { icon: 'account_balance', title: 'Museums' },
          { icon: 'train', title: 'Trains' },
          { icon: 'today', title: 'Events' },
          { icon: 'person', title: 'Profile' },
          { icon: 'face', title: 'Sign Up' },
          { icon: 'lock_open', title: 'Sign In' },
        ],
      };
    },
  };
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
