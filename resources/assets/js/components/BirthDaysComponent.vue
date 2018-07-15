<template>

  <v-container>

    <v-layout row wrap>

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
                loading: true
            }
        },
        created() {
           this.loadBdays();
           this.$eventHub.$on('change-page-request', this.loadBdays);
        },
        beforeDestroy() {
          this.$eventHub.$off('change-page-request');
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
                }).catch(function(error){
                    compData.bdays = error;
                    compData.loading = false; // <- Quick test just to get the loading bool to change.
                    // Kind of keen to explore events at a later date.
                })
            }
        }
    }
</script>
