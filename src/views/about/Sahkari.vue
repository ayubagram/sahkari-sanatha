<template>
  <v-container class="download">
    <div class="download__links pa-3 pa-sm-4 pa-md-5 pa-lg-6">
      <div style="font-size: 28px;" class="mb-4 blue--text">Intruduction</div>
      <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus earum illum nulla facilis, iusto cumque, quod assumenda porro, excepturi velit dolor corporis laboriosam accusamus nisi totam quia ex aspernatur!</span>
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque illo distinctio consequatur repudiandae ducimus quos aperiam ipsam vel maiores quasi! Quidem a nobis debitis in sequi voluptatum temporibus numquam saepe.</span>
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ad aliquid qui repudiandae molestiae eligendi praesentium in a delectus ullam cupiditate odit quos, itaque rem recusandae sequi, ut facere suscipit.</span>
    </div>
    <div class="d-flex flex-column" style="grid-gap: 20px; min-width: 280px;">
      <Card title="Links" />
      <Card title="Services" />  
    </div>
  </v-container>  
</template>

<script>
import Card from '../../components/Cards'
export default {
  components: { Card }
}
</script>