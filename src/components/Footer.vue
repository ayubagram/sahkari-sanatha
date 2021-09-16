<template>
  <v-footer padless class="py-4 py-sm-6 py-md-8 py-lg-10">
    <v-container >
      <div class="footer__info">
        <div class="footer__contact">
          <div class="download__title">Contact Us</div>  
          <div class="d-flex flex-column" style="grid-gap: 20px;">
            <div class="d-flex" style="grid-gap: 12px;" v-for="(contact, c) in contacts" :key="c">
              <v-icon size="20" color="primary" v-text="contact.icon" />
              <p>{{ contact.data }}</p>
            </div>  
          </div>
          <div class="headline mb-2 mt-6">Connect With Us</div> 
          <div class="d-flex flex-wrap" style="grid-gap: 8px;">
            <v-btn v-for="(social, s) in socials" :key="s" height="32" tile text outlined :color="social.color" target="_blank" :href="social.href">
              <v-icon left v-text="social.icon" />
              <span v-text="social.title" />
            </v-btn>  
          </div>
        </div>

        <div class="footer__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.475286597595!2d84.88296471436823!3d27.01514346217793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993558b671d2faf%3A0x8922702ad8a7ddf5!2sAgram%20InfoTech%20Pvt.%20Ltd%2C%20Panitanki%2C%20Birgunj!5e0!3m2!1sen!2snp!4v1613635250851!5m2!1sen!2snp" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Agram Infotech"></iframe>      
        </div>
      </div>  
      <v-divider class="my-6" />  
      <div class="d-flex flex-wrap justify-space-between">
        <p>Sahkari Sanstha. All Rights Reserved.</p>  
        <p>2010 - {{ new Date().getFullYear() }}</p>
        <p>Powered By <a href="https://www.agraminfotech.com" target="_blank">Agram Infotech</a></p>
      </div>
    </v-container>  
  </v-footer>
</template>

<script>
export default {
  data: () =>({
    contacts: [
      { icon: 'mdi-map-marker', data: 'Sahkari Sanstha Bulding, Birta-4, Birgunj, Nepal' },
      { icon: 'mdi-phone', data: '01-4478006, 01-4512842, 01-5382524, 01-4451873, 01-4383689' },
      { icon: 'mdi-email', data: 'sahkarisanstha@gmail.com' }  
    ],
    socials: [
      { icon: 'mdi-facebook', href: 'https://www.facebook.com', color: '#4267B2', title: 'facebook' },
      { icon: 'mdi-twitter', href: 'https://www.twitter.com', color: '#1DA1F2', title: 'Twitter' },
      { icon: 'mdi-youtube', href: 'https://www.youtube.com', color: '#FF0000', title: 'youTube' },
      { icon: 'mdi-instagram', href: 'https://www.instagram.com', color: '#8a3ab9', title: 'Instagram' },
      { icon: 'mdi-linkedin', href: 'https://www.linkedin.com', color: '#0077b5', title: 'Linkedin' }, 
    ] 
  })  
}
</script>

<style>
.footer__info {
  display: grid;
  grid-template-columns: 400px calc(100% - 420px);
  grid-gap: 20px;  
}
.footer__contact .v-btn__content { justify-content: flex-start !important; }
.footer__map {
  min-height: 40vh; 
  border-radius: 6px;
  overflow: hidden; 
}
iframe {
  height: 100%;
  width: 100%;  
}
@media (max-width: 760px) {
  .footer__info { grid-template-columns: 100%; }  
}
</style>