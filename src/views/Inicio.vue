<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>MultService</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <div class="ion-text-center">
          <h1>Bem-vindo ao MultService o seu faz Tudo Digital</h1>
          <p>Seu aplicativo para agendar serviços da sua casa </p>
          <ion-button expand="block" @click="irParaCadastro">Cadastrar</ion-button>
          <ion-button expand="block" @click="irParaLogin">Login</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Inicio',
    methods: {
      irParaCadastro() {
        this.$router.push('/cadastro');
      },
      irParaLogin() {
        this.$router.push('/login');
      }
    },
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonButton
    }
  });
  </script>