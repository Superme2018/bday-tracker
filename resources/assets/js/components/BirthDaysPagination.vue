<template>

  <v-container>
      <v-layout row wrap>
        <v-flex xs12>

          <div class="text-xs-center">
            <v-pagination
              v-model="page"
              :length="6"
            ></v-pagination>
          </div>

        </v-flex>
      </v-layout>
  </v-container>

</template>

<script>
  export default {
    data () {
      return {
        page: 1,
      }
    },
    methods: {
      changePage(page){
        this.$eventHub.$emit('change-page-request', {page:page});
      }
    },
    watch: {
      page: function () {
        this.changePage(this.page)
      }
    },
  }
</script>
