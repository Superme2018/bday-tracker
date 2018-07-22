<template>

  <v-container>

    <v-layout row wrap>

      <v-flex xs12>

          <v-alert
            v-model="alert"
            type="success"
          >
            Successfully created a new birthday!
          </v-alert>

      </v-flex>

      <v-flex v-for="bday in bdays.data" :key="bday.id" xs2>
        <v-card dark color="primary" >

          <v-card-media
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            height="200px"
          ></v-card-media>

          <v-card-title primary-title>
            <v-flex xs12 text-xs-left>
              <div class="title">{{ bday.name }}</div>
              <div class="subheading">{{ bday.days_to_go }}</div>
            </v-flex>
          </v-card-title>

          <v-divider></v-divider>

            <v-card-text>
              <v-flex xs12 text-xs-left>
                <div>Date of Birth: <strong>{{ bday.birth_day }}</strong></div>
                <div>Age on next Birthday: <strong>{{ bday.age_in_years }}</strong></div>
              </v-flex>
            </v-card-text>

        </v-card>
      </v-flex>

     </v-layout>

  </v-container>

</template>

<script>
    export default {

        data(){
            return {
              bdays: {},
              loading: true,
              alert: false
            }
        },
        created() {
           this.loadBdays();
           this.$eventHub.$on('change-page-request', this.loadBdays);
           this.$eventHub.$on('birthday-created-notification', this.alertToggle);
        },
        beforeDestroy() {
          this.$eventHub.$off('change-page-request');
          this.$eventHub.$off('birthday-created-notification');
        },
        methods: {
            loadBdays: function (page) {

                var compData = this;
                var requestUrl = "http://localhost/bday-tracker/public/api/bday/"

                if(page)
                   requestUrl = requestUrl + "?page=" + page.page;

                const requestInstance = axios.get(requestUrl)
                .then(response => {
                    compData.bdays = response.data;
                    compData.loading = false; // <- Quick test just to get the loading bool to change.
                    // Kind of keen to explore events at a later date.

                    compData.$eventHub.$emit('activate-pagination', response.data.meta);

                }).catch(function(error){
                    compData.bdays = error;
                    compData.loading = false; // <- Quick test just to get the loading bool to change.
                    // Kind of keen to explore events at a later date.
                })
            },
            alertToggle: function(state){
              this.alert = state;
              setTimeout(() =>this.alert = !state, 3000); //<- would be nice to have a transition.
            }
        }
    }
</script>
