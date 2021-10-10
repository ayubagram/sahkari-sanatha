<template>
  <div class="home">
    <Carousel />
    <div class="primary py-8 py-sm-10 py-md-12 py-lg-14">
      <v-container class="home__about">
        <div class="white--text">
          <div class="display-1 mb-2">Introduction to Sahkari Sanstha</div>
          <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias obcaecati ex eius quos ut, impedit voluptates distinctio dolorum officiis voluptatem ad molestiae fugiat? Sapiente accusamus harum esse itaque laborum.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti non voluptatum animi distinctio exercitationem mollitia voluptates quibusdam fugit itaque? Eligendi corrupti cumque rem laborum architecto nesciunt iusto hic voluptas?<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa ratione tempora ullam tempore error esse delectus iste, debitis quidem temporibus modi, nesciunt est veniam? Ullam voluptates reprehenderit ea corrupti. <br>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, exercitationem. Quod esse laborum ratione sit a, nobis aspernatur quae amet veritatis dicta maxime fuga iste, animi at unde ipsum. Similique! <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod deserunt id non nesciunt, voluptas placeat? Officiis in tempora numquam, odit laboriosam commodi nesciunt ad obcaecati nostrum inventore nam similique. <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa corporis, voluptatibus tempora, consequatur fugit blanditiis dolores consequuntur odit nostrum repellat. Vero labore officiis earum, repellendus consequatur porro molestiae esse! <br>
          </p>
        </div>
        <div style="max-height: 400px;">
          <img src="https://m.economictimes.com/thumb/msid-54203484,width-1200,height-900,resizemode-4,imgsize-81313/70-per-cent-staff-in-government-offices-watches-videos-on-you-tube.jpg" alt="Introduction to Sahkari Sanstha">
        </div>
      </v-container>
      <div class="text-center mt-4">
        <v-btn outlined width="120" color="white" to="/about">view detail</v-btn>
      </div>
    </div>
    <!-- Our Services -->
    <div class="py-8 py-sm-10 py-md-12 py-lg-14">
      <div class="text-center headline mb-3">Our Services</div>
      <v-container class="services">
        <div class="service__container" v-for="a in 3" :key="a">
          <div class="service__img">
            <img src="https://paymentweek.com/wp-content/uploads/2017/08/atms_img7568.jpg" alt="Service description">
          </div>
          <div class="pa-3 primary white--text">ATM Service</div>
        </div>
      </v-container>
    </div>

    <!-- Our News -->
    <div class="py-8 py-sm-10 py-md-12 py-lg-14" style="background-color: rgb(0 0 0 / 10%);">
      <div class="text-center headline mb-3">Our News</div>
      <v-container class="services">
        <div class="service__container" v-for="(n, a) in news" :key="a">
          <div class="service__img">
            <img src="https://paymentweek.com/wp-content/uploads/2017/08/atms_img7568.jpg" :alt="n.title">
          </div>
          <div class="primary white--text pa-3">
            <span class="text__ellipse">{{ n.description }}</span>
          </div>
        </div>
      </v-container>
      <div class="text-center mt-4">
        <v-btn outlined width="120" color="primary" to="/news">view more</v-btn>
      </div>
    </div>

    <!-- Our Gallery -->
    <div class="py-8 py-sm-10 py-md-12 py-lg-14">
      <div class="text-center headline mb-3">Our Gallery</div>
      <v-container class="gallery">
        <div class="gallery__img" v-for="(img, i) in gallery" :key="i">
          <img :src="img.image" loading="lazy" :alt="img.title">
        </div>  
      </v-container>
      <div class="text-center mt-4">
        <v-btn outlined width="120" color="primary" to="/gallery">view more</v-btn>
      </div>
    </div>

    <!-- Our Centers -->
    <div class="py-8 py-sm-10 py-md-12 py-lg-14" style="background-color: rgb(0 0 0 / 10%);">
      <div class="text-center headline mb-3">Our Members Service Center</div>
      <v-container class="news">
        <div class="footer__map" v-for="a in 4" :key="a">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.475286597595!2d84.88296471436823!3d27.01514346217793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993558b671d2faf%3A0x8922702ad8a7ddf5!2sAgram%20InfoTech%20Pvt.%20Ltd%2C%20Panitanki%2C%20Birgunj!5e0!3m2!1sen!2snp!4v1613635250851!5m2!1sen!2snp" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Agram Infotech"></iframe>      
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import { db } from '../firebase'
export default {
  components: { Carousel },
  data: () => ({
    news: [],
    gallery: []
  }),
  methods: {
    async get() {
      this.$store.commit('SET_OVERLAY', true)
      await this.$binding("news", db.collection("news").where('status', '==', true).orderBy('createdAt', 'desc'))
      await this.$binding("gallery", db.collection("gallery").where('status', '==', true).orderBy('createdAt', 'desc'))
      this.$store.commit('SET_OVERLAY', false)
    }
  },
  created() {
    this.get()
  }
}
</script>

<style scoped>
.home__about {
  display: grid;
  grid-template-columns: calc(100% - 420px) 400px;
  grid-gap: 20px;
}
.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 12px;
}
.service__container { 
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: ease-in-out 250ms; 
}
.service__container:hover {
  transform: translateY(-6px);
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
}
@media (max-width: 860px) {
  .services { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
}
@media (max-width: 770px) {
  .home__about { grid-template-columns: 100%; }
}
@media (max-width: 600px) {
  .services { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
</style>