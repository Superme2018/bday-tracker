<template>

  <v-container>
      <v-layout row wrap>
        <v-flex xs12>

          <div class="text-xs-center">
            <v-pagination
              v-model="page"
              :length="length"
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
        length: 0
      }
    },
    created() {
      this.$eventHub.$on('activate-pagination', this.activatePagination);
    },
    beforeDestroy() {
      this.$eventHub.$off('activate-pagination');
    },
    methods: {
      changePage(page){
        this.$eventHub.$emit('change-page-request', {page:page});
      },
      activatePagination(metaData){
        //console.log(metaData);
        this.page = metaData.current_page;
        this.length = metaData.last_page;
      }
    },
    watch: {
      page: function () {
        this.changePage(this.page)
      }
    },
  }
</script>
