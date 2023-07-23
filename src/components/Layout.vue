<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->
      <v-toolbar-title style="width: 350px">
        <a href="/" class="white--text" style="text-decoration: none"
          ><v-icon>mdi-calendar</v-icon>&nbsp;Kaidee</a
        >
      </v-toolbar-title>
      <v-spacer />
      <v-switch
        :value="darkMode"
        @change="toggleDarkMode"
        :label="`${switchLabel}`"
      ></v-switch>
    </v-app-bar>
    <v-content> </v-content>
    <router-view />
    <v-footer :padless="true">
      <v-card flat tile width="100%" class="secondary white--text text-center">
        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong
            ><v-icon color="#ffffff">mdi-truck</v-icon>&nbsp;KAIDEE</strong
          >
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data: () => {
    return {
      data: 0,
      dialog: false,
      activeBtn: 1,
      darkMode: false,
    };
  },
  computed: {
    switchLabel: function () {
      return this.darkMode ? "สว่าง" : "มืด";
    },
  },
  methods: {
    toggleDarkMode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.darkMode = !this.darkMode;
    },
  },
};
</script>
