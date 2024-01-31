<template>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Feito</ion-card-title>
        <ion-card-subtitle>Seu serviço foi agendado</ion-card-subtitle>
      </ion-card-header>
  
      
  
      <ion-button expand="block" @click="inicio">voltar</ion-button>
      
    </ion-card>
  </template>
  
  <script lang="ts">
    import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
    import { defineComponent, } from 'vue';
  
    export default defineComponent({
        name:'Registro',
        methods: {
      inicio() {
        this.$router.push('/inicio');
      }
      
    },


      components: { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
      

    });
  </script>