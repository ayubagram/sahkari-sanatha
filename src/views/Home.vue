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
          <div class="service__text">ATM Service</div>
          <div class="service__img">
            <img src="https://paymentweek.com/wp-content/uploads/2017/08/atms_img7568.jpg" alt="Service description">
          </div>
        </div>
      </v-container>
    </div>

    <!-- Our News -->
    <div class="py-8 py-sm-10 py-md-12 py-lg-14" style="background-color: rgb(0 0 0 / 10%);">
      <div class="text-center headline mb-3">Our News</div>
      <v-container class="services">
        <div class="news__container" v-for="a in 3" :key="a">
          <div class="news__img">
            <img src="https://paymentweek.com/wp-content/uploads/2017/08/atms_img7568.jpg" alt="Service description">
          </div>
          <div class="primary white--text pa-3">
            <span class="text__ellipse">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam tempora, quos eius amet modi at, quibusdam repudiandae atque neque animi numquam commodi doloremque, vitae minima ipsa id dolorum? Accusamus, non.</span>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
export default {
  components: { Carousel }
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.service__container:hover {
  transform: translateY(-6px);
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
}
.service__text {
  position: absolute;
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(5px);
  height: 80%;
  width: 80%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
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