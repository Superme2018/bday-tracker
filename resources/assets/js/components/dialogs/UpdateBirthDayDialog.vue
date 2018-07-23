<template>

  <v-dialog v-model="dialog" persistent max-width="500px">

    <v-layout grey darken-3 >
      <v-flex md12 ma-4>
        <birthday-form propFormTitle="Update a Birthday" propFormType="update"></birthday-form>
      </v-flex>
    </v-layout>

  </v-dialog>

</template>

<script>
  export default {
    computed:{
      dialog: {
        get(){
          return this.$store.state.updateBirthDayDialog.visible;
        }
      }
    },
    methods: {
      toggle: function(toggleState){
        this.$eventHub.$emit('resets-birthday-form');
        return this.dialog = toggleState;
      }
    },
    watch: {},
  }
</script>
