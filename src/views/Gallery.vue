<template>
  <v-container>
    <div class="gallery">
      <div class="gallery__img" v-for="(img, i) in images" :key="i">
        <img :src="img" loading="lazy" alt="Image Description">
      </div>    
    </div>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    images: [
      'https://images.indianexpress.com/2020/06/office-new-1200.jpg',
      'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/02/15/957659-offices-guidelines.jpg',
      'https://m-moser.imgix.net/uploads/2019_06/Hyatt_1-3288_AJL_-_HKG_2018-08_0124-HDR_1.jpg',
      'https://assets-news.housing.com/news/wp-content/uploads/2019/02/13152538/Vastu-tips-for-office-to-bring-prosperity-at-work-FB-1200x700-compressed.jpg',
      'https://stylesatlife.com/wp-content/uploads/2020/11/Elegant-Small-Office-Space-Design-Idea.jpg.webp',
      'https://www.aleaoffice.com/foto/news/5f19998b74dbc202007231607073.jpg',
      'https://assets.architecturaldigest.in/photos/60082681082e4f0ba094885b/4:3/w_1024,h_768,c_limit/4dfd5890222fb4857b1181eacf72b18d1-1366x768.jpg',
      'https://steelcase-res.cloudinary.com/image/upload/v1496840155/www.steelcase.com/2017/06/07/The_New_Office_01.jpg',
      'https://thumbs.dreamstime.com/b/business-accounting-team-meeting-room-office-using-pen-pointing-paperwork-finance-concept-business-accounting-team-meeting-154771088.jpg',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workspace-with-brick-wall-in-office-royalty-free-image-909223304-1566845696.jpg',
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2018_30/2505991/180723-open-ofice-space-dk-928.jpg',
      'https://commercialobserver.com/wp-content/uploads/sites/3/2020/06/Hero-image-office.jpg',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/home-office-decor-ideas-1582573361.jpg',
      'https://static01.nyt.com/images/2021/05/02/business/00google-office1/00google-office1-videoSixteenByNineJumbo1600.jpg',
      'https://www.allianz.co.uk/broker/sme/office/_jcr_content/root/stage/stageimage.img.82.3360.jpeg/1582295600833/sme-comp-office-desktop-stage.jpeg',
      'https://images.financialexpress.com/2021/01/1-704.jpg',
      'https://stylesatlife.com/wp-content/uploads/2020/08/best-small-office-designs.jpg',
      'https://images.theconversation.com/files/344201/original/file-20200626-33533-13frdsm.jpg',
      'https://www.ikea.com/images/an-industrial-style-studio-at-home-with-high-ceilings-furnit-9748a6ab904949773e0070d1a5c4e3c2.jpg'
    ]  
  })  
}
</script>