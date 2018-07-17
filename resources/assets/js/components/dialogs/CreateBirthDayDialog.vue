<template>

  <v-dialog v-model="dialog" persistent max-width="500px">
    <create-birthday-form></create-birthday-form>
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
        this.dialog = toggleState;
      }
    },
    watch: {},
  }
</script>
