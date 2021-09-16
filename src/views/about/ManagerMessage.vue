<template>
  <v-container class="download">
    <div class="download__links">
      <div class="chairman">
        <div class="chairmain__img">
          <img src="https://tbcdn.talentbrew.com/company/288/16735/content/melisa_1210x806.jpg" alt="Bank Manager">
        </div>
        <div class="chairman__imfo">
          <div class="download__title">Amanda Murfy</div>
          <div>Manager of Sakari Sanstha</div>
          <div>+977 9876543210</div>
          <div class="chairman__social">
            <v-btn v-for="(social, s) in socials" :key="s" icon :color="social.color" target="_blank" :href="social.href">
              <v-icon v-text="social.icon" size="20" />
            </v-btn>
          </div>
        </div>
      </div>
      <div class="mt-6 mt-sm-8 mt-md-10 mt-lg-12">
        <p>I would like to express my warmest welcome to the official website of Kumari Saving & Credit Co-Operative Ltd. (KUSCCOOP) located at Kathmandu metropolitan city, the capital city of Nepal. The motto of this Co-Operative is to provide sound, safe, secured and sustainable Co-Operatives services, for our urban, middle class, low class, deprived sectors and poor (people) members. Our focus is on economic, social, and cultural upliftment of our member by developing their saving habits and providing credit service as per the needs of member.</p> <br>
        <p>According to International Co-Operative Alliance (ICA) defined as, Co-Operatives are people central enterprises, owned, controlled and run by their member to realise their common economic, social and cultural needs and aspirations.</p><br>
        <p>We are guided with five year strategic plan, policies and budget. Having 21 years of extensive service, for the member (KUSCCOOP) has been intensifying up as sound, safe, secured and sustainable Co-Operative in Kathmandu, Nepal. Between 21 years we started from 25 founder members with 25 Lakh capital and currently we are working with more than 7,600 valuable member and 5 member service center (Branches) around Kathmandu district total assets of KUSCCOOP is our 1 Arab 75 Crore. We have build our own 8.5 storey Kumari Building (Kumari Co-Operative Building) Headquarter (Head Office) in Kathmandu metropolitan city ward no 7 Kumari Chowk, Chabahil, Mitrapark, Kathmandu, Nepal in  September 12, 2012.</p> <br>
        <p>The organization achievement and continuous growth in services, transaction or assets are managed by experience dedicated and futuristic Board of Director, member’s, management, sub-committees and experienced, SMART, dedicated and qualified employees.</p> <br>
        <p>Co-Operative is a community based social business where an autonomous association of persons united in a member base to meet their common economic, social and cultural development and aspiration. We are following the norms; values and principles of international Co-Operative movement and national Co-Operative, rules, regulations and laws. We are assured to provide best choices for sound, safe, secured and sustainable saving credit service (credit union) to our member's by following the theory of “Kumari is my first choice Co-Operative” using latest modern technologies, SMART banking service like SMS service, MOBILE banking, ATM card service, internet banking, remittance service, online bill payment services of telecom, electricity, internet, dish home etc.</p> <br>
        <p>So, I would like to request everyone to take membership in Kumari Saving Credit Co-Operative Ltd. (KUSCCOOP) for saving and credit (credit union banking services) where I assure sound, safe, secured service to your valuable hard earned money.</p> <br>
        <p>We provide finest interest in saving & credit service and I advised to you all members not to stroll from high rate interest in deposit and loan service, choose safe, secured co-operative as prefer Kumar is your first choice co-operative.</p> <br>
        <p class="mt-5">Bast Regards, <br>Amanda Murfy <br>(Manager)</p>
      </div>
    </div>
    <div class="cards__with__links">
      <Card title="Links" />
      <Card title="Services" /> 
      <Card title="News" />  
    </div>
  </v-container>  
</template>

<script>
import Card from '../../components/Cards'
export default {
  components: { Card },
  data: () => ({
    socials: [
      { icon: 'mdi-facebook', href: 'https://www.facebook.com', color: '#4267B2' },
      { icon: 'mdi-twitter', href: 'https://www.twitter.com', color: '#1DA1F2' },
      { icon: 'mdi-instagram', href: 'https://www.instagram.com', color: '#8a3ab9' },
      { icon: 'mdi-linkedin', href: 'https://www.linkedin.com', color: '#0077b5' }, 
    ] 
  })
}
</script>