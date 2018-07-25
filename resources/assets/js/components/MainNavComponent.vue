<template>

    <v-flex md12 ma-4>

      <span class="title">Birthday Tracker</span>

      <v-btn color="green" @click="createBirthday">Create Birthday</v-btn>
      <v-btn color="green" @click="updateBirthday({name: 'John', date:'2015-01-01'})">Edit Birthday</v-btn>

    </v-flex>

</template>

<script>

  //import {mapGetters} from 'vuex';
  //import {mapMutations} from 'vuex';

  export default {
    computed: {
    },
    data () {
      return {}
    },
    created() {},
    beforeDestroy() {},
    methods: {
     createBirthday: function(){

      this.$store.commit('createBirthdayDialogModule/setVisibility', true);

     },
     updateBirthday: function(data){

      this.$store.commit('updateBirthdayDialogModule/setVisibility', true);
      this.$store.dispatch('birthdayForm/setForm', data);

       //this.$eventHub.$emit('toggle-update-birthday-dialog', true);
       //this.$eventHub.$emit('set-birthday-form', data);

     }
    },
    watch: {},
  }
</script>
