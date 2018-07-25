<template>

      <v-form ref="form" v-model="valid" lazy-validation>

        <v-flex md12 mb-4 >
          <v-alert
            v-model="alert"
            dismissible
            type="error"
          >
          {{ this.$store.getters['birthdayForm/getAlertMessage'] }}
        </v-alert>
      </v-flex>

        <v-flex md12 mb-4 >
          <h3 class="title" prepend-icon="event">
            {{ propFormTitle }}
          </h3>
        </v-flex>

        <v-flex md12 >
          <v-text-field
            v-model="name"
            :counter="10"
            label="Name"
            required
            prepend-icon="fingerprint"
            v-validate="'required|max:10'"
            :error-messages="errors.collect('name')"
            data-vv-name="name"
          >
          </v-text-field>
        </v-flex>

        <v-flex md12 >

          <v-menu
            ref="datePicker"
            :close-on-content-click="false"
            v-model="datePicker"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
            @update:returnValue="validateForm"
          >

          <v-text-field
            slot="activator"
            v-model="dateFormatted"
            label="Date of Birth"
            hint="DOB must be in MM/DD/YYYY format"
            persistent-hint
            prepend-icon="event"
            v-validate="'required|date_format:MM/DD/YYYY'"
            data-vv-name="dateFormatted"
            :error-messages="errors.collect('dateFormatted')"
          ></v-text-field>

            <v-date-picker v-model="date" no-title @input="datePicker = false"></v-date-picker>

          </v-menu>

        </v-flex>

        <v-flex md12 mt-4>

          <v-btn
            color="deep-blue accent-4"
            @click="toggleState(false)"
            :disabled="cancelActive"
          >
            Cancel
          </v-btn>

          <v-btn
            :loading="loadingActive"
            color="deep-blue accent-4"
            @click="validateFormAndSend"
            :disabled="!valid"
          >
            Save
          </v-btn>

        </v-flex>

    </v-form>

</template>

<script>
  export default {
    $_veeValidate: {
      validator: 'new'
    },
    props: [
      'propFormType',
      'propFormTitle'
    ],
    computed:{ //<-- Hmmmm, ES6, maybe?
      name: {
        get(){
          return this.$store.getters['birthdayForm/getName'];
        },
        set(name){
          this.$store.commit('birthdayForm/setName', name);
        }
      },
      date: {
        get(){
          return this.$store.getters['birthdayForm/getDate'];
        },
        set(date){
         this.$store.commit('birthddayForm/setDate', date);
        }
      },
      dateFormatted: {
        get(){
          return this.$store.getters['birthdayForm/getBirthday'];
        },
        set(date){
         this.$store.commit('birthdayForm/setBirthday', this.formatDate(date));
        }
      },
      datePicker: {
        get(){
          return this.$store.getters['birthdayForm/getBirthday'];
        },
        set(date){
         this.$store.commit('birthdayForm/setBirthday', this.formatDate(date));
        }
      },
      valid:{
        get(){
          return this.$store.getters['birthdayForm/getValid'];
        },
        set(date){
          this.$store.commit('birthdayForm/setValid', date);
        }
      },
      alert:{
        get(){
          return this.$store.getters['birthdayForm/setAlertActive'];
        },
        set(val){
          this.$store.commit('birthdayForm/getAlertActive', val);
        }
      },
      datePicker:{
        get(){
          return this.$store.getters['birthdayForm/setAlertActive'];
        },
        set(val){
          this.$store.commit('birthdayForm/getAlertActive', val);
        }
      },
      cancelActive:{
         get(){
          return this.$store.getters['birthdayForm/setCancelActive'];
        },
        set(val){
          this.$store.commit('birthdayForm/getCancelActive', val);
        }
      },
      loadingActive:{
         get(){
          return this.$store.getters['birthdayForm/getLoaderActive'];
        },
        set(val){
          this.$store.commit('birthdayForm/setLoaderActive', val);
        }
      }
    },
    created() {},
    beforeDestroy() {},
    methods: {
      toggleState: function(toggleState){
        if(this.propFormType == "update"){
          this.$store.commit('updateBirthdayDialogModule/setVisibility', false);
        } else {
          this.$store.commit('createBirthdayDialogModule/setVisibility', false);
        }
      },
      validateForm(){
        setTimeout(() => this.$validator.validateAll(), 200);
      },
      validateFormAndSend(){
        this.$validator.validateAll().then( res => {
          if(res){
            this.$store.dispatch('birthdayForm/createBirthDay');
          } else {
            console.log("Error with validation.");
          }
        });
      },
      formatDate (date) {
        if (!date)
          return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      }
    },
    watch: {
      date (date) {
        this.$store.commit('birthddayForm/setDateFormated', this.formatDate(date));
      }
    },
  }
</script>
