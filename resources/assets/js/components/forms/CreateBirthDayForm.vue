<template>

      <v-form ref="form" v-model="valid" lazy-validation>


        <v-heading class="title" >
          Create a New Birthday
        </v-heading>

        <v-flex md12>
          <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="Name"
              required
          ></v-text-field>
        </v-flex>

        <v-flex md12>

          <v-menu
            ref="menu1"
            :close-on-content-click="false"
            v-model="menu1"
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
            @blur="date = parseDate(dateFormatted)"
          ></v-text-field>

          <v-date-picker v-model="date" no-title @input="menu1 = false" ></v-date-picker>

          </v-menu>

        </v-flex>

        <v-flex md12 mt-4>

          <v-divider></v-divider>

          <v-btn
            color="deep-blue accent-4"
            @click="toggleState(false)"
          >
          Cancel
          </v-btn>

          <v-btn
            color="deep-blue accent-4"
            @click="toggleState(true)"
          >
          Save
          </v-btn>

        </v-flex>

    </v-form>

</template>

<script>
  export default {
    data () {
      return {
        date: null,
        dateFormatted: null,
        menu1: false,
      }
    },
    created() {},
    beforeDestroy() {},
    methods: {
      toggleState: function(toggleState){
        this.$eventHub.$emit('toggle-create-birthday-dialog', toggleState);
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
