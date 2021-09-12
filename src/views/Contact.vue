<template>
  <v-container>
    <div class="contact py-4 py-sm-6 py-md-8 py-lg-10">
      <div class="contact__info">
        <div class="headline mb-3">Contact Details</div>  
        <div class="pa-4 pa-sm-5 pa-md-6 pa-lg-7 grey lighten-4 d-flex flex-column" style="grid-gap: 20px;">
          <div v-for="(contact, c) in contacts" :key="c">
            <div class="d-flex mb-2 primary--text" style="grid-gap: 12px;">
              <v-icon v-text="contact.icon" color="primary" size="30" />
              <div class="title">{{ contact.title }}</div>
            </div>
            <div v-if="contact.items" class="d-flex flex-column" style="grid-gap: 8px; opacity: .75;">
              <div v-for="(item, i) in contact.items" :key="i">
                <div style="font-size: 18px;">{{ item.title }}</div>
                <p>{{ item.data }}</p>
              </div>
            </div>
            <p v-else>{{ contact.data }}</p>
          </div>
        </div>
      </div>
      <div class="contact__form">
        <div class="headline mb-3">Send Us Message</div>
        <v-form ref="form" lazy-validation v-model="valid" class="d-flex flex-column" style="grid-gap: 12px;">
          <v-text-field label="Full Name*" v-model="form.name" outlined dense hide-details :rules="[ v => !!v || '' ]" />
          <v-text-field label="Email*" v-model="form.email" outlined dense hide-details :rules="emailRules" />
          <v-text-field label="Mobile Number*" type="number" :counter="10" v-model="form.mobile" outlined dense hide-details :rules="mobileRules" />
          <v-text-field label="Subject*" v-model="form.subject" outlined dense hide-details :rules="[ v => !!v || '' ]" />
          <v-textarea label="Message" v-model="form.message" outlined dense hide-details />  
          <v-btn large max-width="200" color="primary" tile elevation="0" :disabled="!valid" @click="submit">send mesasage</v-btn>
        </v-form>
      </div>
    </div>
  </v-container>  
</template>

<script>
export default {
  data: () =>({
    contacts: [
      { 
        icon: 'mdi-phone', 
        title: 'Call Us', 
        items: [
          { title: 'Headquater(Head Office)', data: 'Sahkari Sanstha Bulding, Birta-4, Birgunj, Nepal' },
          { title: 'Phone Numbers', data: '01-4478006, 01-4512842, 01-5382524, 01-4451873, 01-4383689' },
          { title: 'All Branches Number', data: '01-4478006, 01-4412842, 01-4282514, 01-4451873, 01-4383689' }
        ]
      },
      { icon: 'mdi-map-marker', title: 'Visit Us', data: 'Sahkari Sanstha Bulding, Birta-4, Birgunj, Nepal' },
      { icon: 'mdi-email', title: 'Email Us', data: 'sahkarisanstha@gmail.com' }  
    ],
    valid: true,
    form: {
      name: null,
      email: '',
      mobile: '',
      subject: '',
      message: null
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    mobileRules: [
      v => !!v || 'Phone number is required.',
      v => v.length == 10 || 'Invalid mobile number'
    ]
  }),
  methods: {
    submit() {
      if(this.$refs.form.validate()) console.log('validated')
      else console.log('not validated')
    }
  }
}
</script>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: 400px calc(100% - 420px);
  grid-gap: 20px;  
}
@media (max-width: 760px) {
  .contact { grid-template-columns: 100%; }  
}
</style>