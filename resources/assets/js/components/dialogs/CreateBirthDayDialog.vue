<template>

  <v-dialog v-model="dialog" persistent max-width="500px">

    <v-layout grey darken-3 >
      <v-flex md12 ma-4>
        <create-birthday-form></create-birthday-form>
      </v-flex>
    </v-layout>

  </v-dialog>

</template>

<script>
  export default {
    data () {
      return {
        dialog: true
      }
    },
    created() {
      this.$eventHub.$on('toggle-create-birthday-dialog', this.toggle);
    },
    beforeDestroy() {
      this.$eventHub.$off('toggle-create-birthday-dialog');
    },
    methods: {
      toggle: function(toggleState){

        if(toggleState)
          return console.log("Send data")
        return this.dialog = toggleState;
      }
    },
    watch: {},
  }
</script>
