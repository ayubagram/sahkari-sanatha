<template>
  <v-app>
    <Overlay />
    <TopHeader />
    <Navbar />
    <Sidebar />
    <Breadcumb />
    <v-main :class="$route.path !== '/' ? 'py-8' : ''">
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Overlay from './components/Overlay.vue'
import TopHeader from './components/TopHeader'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Breadcumb from './components/Breadcumb'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Overlay, TopHeader, Navbar, Sidebar, Breadcumb, Footer },
};
</script>

<style>
html { scroll-behavior: smooth; }
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
::-webkit-scrollbar { display: none; }
.v-toolbar__content { padding: 4px 12px !important; }
.v-toolbar__content .v-btn.v-btn--icon.v-size--default {
  height: 40px !important;
  width: 40px !important;
}
.container {
  max-width: 1250px !important;
  margin: 0 auto !important;
  padding: 12px !important;
}
p {
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: .5px;
  margin-bottom: 0 !important;
  text-align: justify;
}
b { font-size: 20px; }
.v-btn span {
  font-size: 14px !important;
  text-transform: capitalize !important;
  font-weight: 300 !important;
}
img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
} 

.v-list { padding: 0 !important; }
.v-menu__content, .v-list--nav .v-list-item { border-radius: 0 !important; }

/* Input Fields */
.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot { border-radius: 0 !important; }
.v-text-field input, .v-input .v-label {
  font-size: 13px !important;
  color: rgb(0 0 0 / 80%) !important;
  font-weight: 300 !important;
  letter-spacing: 1px !important;
}
.v-input input { font-size: 12px !important; }
.v-input .v-label { 
  line-height: 1 !important;
  font-size: small !important;
}
.v-text-field--outlined.v-input--is-focused fieldset { border: 1px solid #00a652 !important; }
.v-text-field--outlined.v-input--has-state fieldset { border: 1px solid #ff6666 !important; }
.v-text-field--outlined.v-input--dense .v-label { top: 14px !important; }
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] { -moz-appearance: textfield; }

/* Text Ellipse */
.text__ellipse {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;  
  line-height: 1.25;
  color: #fff;
}

/* Gallery */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));  
}
.gallery__img {
  cursor: pointer;
  overflow: hidden; 
}
.gallery__img img { transition: ease-in-out 250ms; }
.gallery__img:hover img { transform: scale(1.25); }

/* News */
.news {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 12px;  
}
.news__container { 
  position: relative; 
  box-shadow: 2px 2px 10px 0 rgb(0 0 0 / 10%);
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  transition: ease-in-out 250ms;
}
.news__container:hover {
  transform: translateY(-6px);
}
.news__img { height: 200px; }

/* Download */
.download {
  display: grid;
  align-items: flex-start;
  grid-template-columns: calc(100% - 310px) 280px;
  grid-gap: 30px;
}
.download__links { 
  width: 100%; 
  border: .5px solid rgb(0 0 0 / 10%); 
  padding: 28px 36px;
}
.cards__with__links {
  display: flex;
  flex-direction: column;
  grid-gap: 20px; 
  min-width: 280px;
}
ul li { 
  list-style: circle;
  font-size: 1rem;
  letter-spacing: .7px;
  font-weight: 300;
  /* color: #337ab7; */
}
.quick__card {
  box-shadow: 1px 5px 15px 0 rgb(0 0 0 / 20%);
  border-top: 4px solid #00a652;
}
.download__title {
  font-size: 28px;
  font-weight: 400;
  color: #337ab7;
  line-height: 1.25;
  margin-bottom: 12px;
}

.mission span, .mission li, .remittance li {
  font-size: 0.85rem;
  letter-spacing: .7px;
  font-weight: 300;
}
.remittance li { font-size: 1rem !important; }
.mission ul li, .remittance li { list-style: decimal !important; color: #444444; }

/* Chairmain */
.chairman {
  display: flex;
  align-items: center;
  grid-gap: 20px;
}
.chairmain__img { max-width: 300px; }

/* Management Team */
.management__teams {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22%, 1fr));
  grid-gap: 12px;
}
.team__member__img { height: 200px; }


/* Table */
table {
  border-collapse: collapse;  
  width: 100%;
  text-align: center;
  table-layout: fixed;
}
table tr th, table tr td { 
  border: .5px solid rgb(0 0 0 / 30%); 
  height: 50px;
  padding: 0 10px;
}
td { font-weight: 300; font-size: 18px; }

/* Media Queries */
@media (max-width: 1060px) {
  .gallery {grid-template-columns: repeat(auto-fit, minmax(25%, 1fr)); }  
  .news { grid-template-columns: repeat(auto-fit, minmax(32%, 1fr)); }  
  .download__links { padding: 24px 32px; }
}
@media (max-width: 900px) {
  .chairman { 
    flex-direction: column; 
    justify-content: center;
    text-align: center;
  }
  .management__teams { grid-template-columns: repeat(auto-fit, minmax(31%, 1fr)); }
  .team__member__img { height: 180px; }
}
@media (max-width: 860px) {
  .gallery {grid-template-columns: repeat(auto-fit, minmax(33%, 1fr)); }  
  .download__links { padding: 20px 28px; }
  .download__title { font-size: 25px; }
}
@media (max-width: 760px) {
  .news { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }  
  .download { grid-template-columns: 100%; }
  .download__links { padding: 16px 24px; }
  .download__title { font-size: 22px; }
}
@media (max-width: 660px) {
  .gallery {grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }  
  .download__links { padding: 16px 20px; }
  .management__teams { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
  .team__member__img { height: 160px; }
}
@media (max-width: 500px) {
  .news { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }  
}
@media (max-width: 360px) {
  .gallery {grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }  
}
</style>