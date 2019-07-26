<template>
  <div id="app">
    <v-app>
      <div id="nav">
        <v-content>
          <v-container>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </v-container>
        </v-content>
      </div>
      <v-container>
        <router-view />
      </v-container>
    </v-app>
  </div>
</template>
