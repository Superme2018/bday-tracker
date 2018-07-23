<template>

    <v-flex md12 ma-4>

      <span class="title">Birthday Tracker</span>

      <v-btn color="green" @click="createBirthday">Create Birthday</v-btn>
      <v-btn color="green" @click="updateBirthday({name: 'John', date:'2015-01-01'})">Edit Birthday</v-btn>

    </v-flex>

</template>


<script>
  export default {
    data () {
      return {}
    },
    created() {},
    beforeDestroy() {},
    methods: {
     createBirthday: function(){
       this.$store.commit('showCreateBirthDayDialog');
       //this.$eventHub.$emit('toggle-create-birthday-dialog', true);
     },
     updateBirthday: function(data){
       this.$store.commit('showUpdateBirthDayDialog');
       this.$store.commit('setName', data.name);
       this.$store.commit('setBirthDay', data.date);
       //this.$eventHub.$emit('toggle-update-birthday-dialog', true);
       //this.$eventHub.$emit('set-birthday-form', data);
     }
    },
    watch: {},
  }
</script>
