<template>
  <v-container fluid fill-height class="login__container">
      <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
              <v-card class="login">
                  <v-toolbar class="login__toolbar">
                      <v-toolbar-title>Accéder à l'application</v-toolbar-title>
                  </v-toolbar>
                  <v-form @submit.prevent="login()">
                      <v-card-text>
                          <v-text-field prepend-icon="person" v-model="username" label="Login" type="text" required></v-text-field>
                          <v-text-field prepend-icon="lock" v-model="password" label="Mot de passe" id="password" type="password" required></v-text-field>
                      </v-card-text>
                      <v-card-actions>
                          <router-link to="/dashboard">Go to dashboard</router-link>
                          <v-spacer></v-spacer>
                          <v-btn class="default" type="submit" depressed color="primary">Connexion</v-btn>
                      </v-card-actions>
                  </v-form>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  export default {
      data() {
          return {
              username: '',
              password: '',
          }
      },

      methods: {
          login() {
             this.$store.dispatch('retrieveToken', {
               username: this.username,
               password: this.password
             })
          }
      }
  }
</script>
