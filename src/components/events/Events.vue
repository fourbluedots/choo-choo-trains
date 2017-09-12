<<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  src="https://upload.wikimedia.org/wikipedia/commons/4/43/GM43_train.JPG"
                  height="200px"
                >
                </v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="black--text" mb0>Train Rides for Kids and Adults</h5>
                    <span>October 20th, 2017</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn to="/events/1"><v-icon left light>arrow_forward</v-icon>View Event</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
