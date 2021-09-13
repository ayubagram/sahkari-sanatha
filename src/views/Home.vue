<template>
  <div class="home">
    <Carousel />
    <div class="primary py-4 py-sm-6 py-md-8 py-lg-10">
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
@media (max-width: 770px) {
  .home__about { grid-template-columns: 100%; }
}
</style>