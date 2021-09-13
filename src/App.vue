<template>
  <v-app>
    <Navbar />
    <Sidebar />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Navbar, Sidebar, Footer },
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
.v-text-field--outlined.v-input--is-focused fieldset { border: 1px solid #1976d2 !important; }
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
</style>