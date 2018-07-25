<template>

      <v-form ref="form" v-model="valid" lazy-validation>

        <v-flex md12 mb-4 >
          <v-alert
            v-model="alert"
            dismissible
            type="error"
          >
          {{ this.alertMessage }}
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
            :disabled="cancelBtn"
          >
            Cancel
          </v-btn>

          <v-btn
            :loading="loading"
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
    computed:{
      name: {
        get(){
          return this.$store.getters['birthdayForm/getName'];
        }
      },
      date: {
        get(){
          return this.$store.getters['birthdayForm/getBirthday'];
        },
        set(date){
          this.$store.commit('birthdayForm/setBirthday', date);
        }
      },
    },
    data () {
      return {
        alert: false,
        alertMessage: null,
        loader: null,
        loading: false,
        id: null,
        dateFormatted: null,
        datePicker: false,
        valid: false,
        cancelBtn: false,
        saveEnabled: true
      }
    },
    created() {
      //this.$eventHub.$on('set-birthday-form', this.setForm);
      //this.$eventHub.$on('resets-birthday-form', this.resets);
    },
    beforeDestroy() {
      //this.$eventHub.$off('set-birthday-form');
      //this.$eventHub.$off('resets-birthday-form');
    },
    methods: {
      setForm(data){

        //if(!data.name || !data.date || !data.id)
        //  this.alert = true; this.alertMessage = "Missing required parameters.";

        //this.id = data.id;
        //this.name = data.name;
        //this.dateFormatted = this.formatDate(data.date);

      },
      resets(){
        //this.alert = false;
      },
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
            this.toggleState(true);
            this.createNewBirthDay(this.name, this.date);
          } else {
            console.log("Error with validation.");
          }
        });
      },
      createNewBirthDay(name, date){

        this.setLoader(true);
        this.cancelBtn = true;

        var compData = this;
        var requestUrl = "http://localhost/bday-tracker/public/api/bday"

        const requestInstance = axios.post(requestUrl,
            {
              name: name,
              birthDay: date
            })
          .then(response => {

              compData.bday = response.data;

              compData.setLoader(false),
              this.$eventHub.$emit('toggle-create-birthday-dialog', false);
              this.$eventHub.$emit('change-page-request', {page:5}); // Page 5 for testing.
              this.$eventHub.$emit('birthday-created-notification', {state:true});

          }).catch(function(error){

              compData.bday = error;

              compData.setLoader(false);
              compData.cancelBtn = false;

              compData.alert = true;
              this.alertMessage = "Unable to create new Birthday record.";

          })

      },
      formatDate (date) {
        if (!date)
          return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      setLoader (state) {

        console.log(state);

        if(state){
          this.loading = true; return;
        }

        this.loading = false; return;
      }
    },
    watch: {
      date (date) {
        this.dateFormatted = this.formatDate(this.date)
      }
    },
  }
</script>
