<template>
  <v-app>
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
import TopHeader from './components/TopHeader'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Breadcumb from './components/Breadcumb'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { TopHeader, Navbar, Sidebar, Breadcumb, Footer },
  data: () => ({
    //
  }),
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
}

::-webkit-scrollbar { display: none; }

.container {
  max-width: 1250px !important;
  margin: 0 auto !important;
  padding: 12px !important;
}
p {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: .5px;
  margin-bottom: 0 !important;
}
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
}
.news__img { height: 200px; }

/* Download */
.download {
  display: flex;
  align-items: flex-start;
  grid-gap: 30px;  
}
.download__links { 
  width: 100%; 
  border: .5px solid rgb(0 0 0 / 10%); 
}
ul li { list-style: square; }
.quick__card {
  box-shadow: 0 3px 15px 0 rgb(0 0 0 / 20%);
  border-top: 4px solid #00a652;
  border-radius: 6px;
}
.download__title {
  font-size: 28px;
  font-weight: 500;
  line-height: 1;
}

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
td { font-weight: 300; }

/* Media Queries */
@media (max-width: 1060px) {
  .gallery {grid-template-columns: repeat(auto-fit, minmax(25%, 1fr)); }  
  .news { grid-template-columns: repeat(auto-fit, minmax(32%, 1fr)); }  
}
@media (max-width: 860px) {
  .gallery {grid-template-columns: repeat(auto-fit, minmax(33%, 1fr)); }  
}
@media (max-width: 760px) {
  .news { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }  
  .download { flex-direction: column; }
}
@media (max-width: 660px) {
  .gallery {grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }  
}
@media (max-width: 500px) {
  .news { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }  
}
@media (max-width: 360px) {
  .gallery {grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }  
}
</style>