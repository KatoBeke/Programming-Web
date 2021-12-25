<template>
  <div id="app">
    <!-- Homepage !-->
    <Homepage 
      v-if="page == 'home'"
      @change-page="goToPage"
    />

    <!-- Game !-->
    <Gamepage
      v-if="page == 'game'"
      @change-page="goToPage"
    />

    <!-- Ranking !-->
    <Rankingpage
      v-if="page == 'ranking'"
      @change-page="goToPage"
    />
    <!-- Dit moeten jullie doen !-->

  </div>
</template>

<script>
// Pages
import Homepage from "./pages/Homepage.vue";
import Gamepage from "./pages/Gamepage.vue";
import Rankingpage from "./pages/Rankingpage.vue";

import style from './scss/style.scss';

// App component
export default {
  name: 'App',
  components: {
    Homepage,
    Gamepage,
    Rankingpage
  },
  data() {
    return {
     page:"home"
    }
  },
  methods: {
    goToPage(page) {
      this.page = page;
    }
  }
}
</script>
