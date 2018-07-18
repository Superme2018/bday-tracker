<template>

      <v-form ref="form" v-model="valid" lazy-validation>

        <v-flex md12 mb-4 >
          <h3 class="title"  prepend-icon="event">
            Create a New Birthday
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
          ></v-text-field>
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
          >

          <v-text-field
            slot="activator"
            v-model="dateFormatted"
            label="Date"
            hint="MM/DD/YYYY format"
            persistent-hint
            prepend-icon="event"
            v-validate="'required'"
            data-vv-name="dateFormatted"
            :error-messages="errors.collect('dateFormatted')"
            @blur="date = parseDate(dateFormatted)"
          ></v-text-field>

            <v-date-picker v-model="date" no-title @input="datePicker = false" ></v-date-picker>

          </v-menu>

        </v-flex>

        <v-flex md12 mt-4>

          <v-btn
            color="deep-blue accent-4"
            @click="toggleState(false)"
          >
            Cancel
          </v-btn>

          <v-btn
            color="deep-blue accent-4"
            @click="toggleState(true)"
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
    data () {
      return {
        date: null,
        dateFormatted: null,
        datePicker: false,
        valid: false,
        name: '',
        saveEnabled: true
      }
    },
    created() {},
    beforeDestroy() {},
    methods: {
      toggleState: function(toggleState){
        this.$validator.validateAll();
        //this.$eventHub.$emit('toggle-create-birthday-dialog', toggleState);
      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    },
    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      }
    },
  }
</script>
