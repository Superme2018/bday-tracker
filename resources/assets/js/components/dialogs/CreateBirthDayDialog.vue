<template>

  <v-dialog v-model="dialog" persistent max-width="500px">

    <v-layout grey darken-3 >
      <v-flex md12 ma-4>
        <birthday-form propFormTitle="Create a New Birthday" propFormType="create"></birthday-form>
      </v-flex>
    </v-layout>

  </v-dialog>

</template>

<script>
  export default {
    computed:{
      dialog: {
        get(){
          return this.$store.getters['createBirthdayDialogModule/getVisibility'];
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
