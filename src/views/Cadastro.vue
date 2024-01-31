<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Cadastro</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-list>
          <ion-item>
            <ion-label position="stacked">Nome</ion-label>
            <ion-input v-model="nome" type="text"></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label position="stacked">E-mail</ion-label>
            <ion-input v-model="email" type="email"></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label position="stacked">Senha</ion-label>
            <ion-input v-model="senha" type="password"></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label position="stacked">Confirmar Senha</ion-label>
            <ion-input v-model="confirmarSenha" type="password"></ion-input>
          </ion-item>
  
          <ion-button expand="block" @click="cadastrar">Cadastrar</ion-button>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonPage,
           IonHeader,
           IonToolbar, 
           IonTitle, 
           IonContent, 
           IonList, 
           IonItem, 
           IonLabel, 
           IonInput, 
           IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Cadastro',
    data() {
      return {
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
      };
    },
    methods: {
      cadastrar() {
        if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
          console.log('Por favor, preencha todos os campos');
          return;
        }
  
        
        if (this.senha !== this.confirmarSenha) {
          console.log('As senhas não coincidem');
          return;
        }
  
        console.log('Dados de cadastro enviados:', this.nome, this.email, this.senha);
        
        this.$router.push('/servicos');
      }
    },
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonList,
      IonItem,
      IonLabel,
      IonInput,
      IonButton
    }
  });
  </script>