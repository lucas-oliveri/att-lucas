
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Serviços</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item v-for="servico in servicos" :key="servico.id">
          <ion-button @click="verDetalhes(servico.id)">
           {{ servico.nome }}
          </ion-button >
        
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Servicos',
    data() {
      return {
        servicos: [

          { id: 1, nome: 'Lavagem de carros' },
          { id: 2, nome: 'Limpeza de terrenos' },
          { id: 3, nome: 'Consertos elétricos básicos' },
          { id: 4, nome: 'Encanamento' },
          { id: 5, nome: 'Pintura' },
          { id: 6, nome: 'Montagem de móveis' },
          { id: 7, nome: 'Instalação de itens domésticos' },
          { id: 8, nome: 'Montagem de móveis e equipamentos' },
          { id: 9, nome: 'Instalação de sistemas de irrigação' },
          { id: 10, nome: 'Montagem e reparo de cercas e portões' },
          { id: 11, nome: 'Manutenção de jardins' },
          { id: 12, nome: 'Pequenas reformas' },
          { id: 13, nome: 'Instalação de sistemas de segurança' },
          { id: 14, nome: 'Serviços de impermeabilização' },
          { id: 15, nome: 'Tarefas de carpintaria' },
          { id: 16, nome: 'Reparo de telhados e calhas' },
          { id: 17, nome: 'Instalação de sistemas de ventilação' },
      ] 
      };
    },
    methods:{
      verDetalhes(v:number){
        this.$router.push('/detalhes')
      }
    }
  });

</script>














