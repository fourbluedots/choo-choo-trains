<template>
  <v-app light>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon left>account_balance</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Museum</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
          <v-list-tile-action>
            <v-icon left>trains</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Trains</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
          <v-list-tile-action>
            <v-icon left>today</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Events</v-list-tile-content>
          </v-list-tile>
        <!-- <v-list-tile><v-icon left>train</v-icon>Trains</v-list-tile> -->
        <!-- <v-list-tile><v-icon left>today</v-icon>Events</v-list-tile> -->
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
      class="hidden-sm-and-up"
      @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>Choo-Choo-Trains</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat><v-icon left>account_balance</v-icon>Museums</v-btn>
        <v-btn flat><v-icon left>train</v-icon>Trains</v-btn>
        <v-btn flat><v-icon left>today</v-icon>Events</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>

    </main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: false,
      };
    },
  };
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
