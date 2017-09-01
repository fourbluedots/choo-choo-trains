<<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn large router to="/events" class="accent"> See Events</v-btn>
        </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <v-btn large router to="/events/new" class="accent">Add Event</v-btn>
        </v-flex>
    </v-layout>
  </v-container>
</template>
