<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Login</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-label position="stacked">E-mail</ion-label>
            <ion-input v-model="emailj" type="email"></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label position="stacked">Senha</ion-label>
            <ion-input v-model="senhaj" type="password"></ion-input>
          </ion-item>
  
          <ion-button expand="full" @click="login">Entrar</ion-button>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent,
           IonHeader,
           IonPage,
           IonTitle,
           IonToolbar,
           IonList,
           IonItem, 
           IonLabel,
           IonInput,
           IonButton,
           IonToast } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Login',
    data() {
      return {
        emailj:'',
        senhaj:'',
        emailc: 'test@gmail.com',
        senhac: 'senha@123',
        
      };
    },
    methods: {
      login() {
        if (this.emailj === this.emailc && this.senhaj === this.senhac) {
            this.$router.push('/servicos');
        } else {
          console.log('E-mail ou senha incorretos');
          this.exibirToast = true;
        }
        
      },
    },
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonList,
      IonItem,
      IonLabel,
      IonInput,
      IonButton,
      IonToast,
    },
  });
  </script>