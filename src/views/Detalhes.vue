 <template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Detalhes</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-label position="stacked">Detalhes</ion-label>
            <ion-input placeholder="detalhes do serviço" v-model="Detalhes" type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Data do agendamento</ion-label>
            <ion-input placeholder="00/00/00" v-model="dataAgendamento" type="date"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Localização</ion-label>
            <ion-input placeholder="local do serviço" v-model="Localização" type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Disponibiidade</ion-label>
            <ion-input placeholder="horarios disponiveis" v-model="Disponibiidade" type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Contato</ion-label>
            <ion-input  placeholder="formas de contato " v-model="Contato" type="text"></ion-input>
          </ion-item><ion-item>
            <ion-label position="stacked">Materiais</ion-label>
            <ion-input placeholder="materiais necessarios" v-model="Materiais" type="text"></ion-input>
          </ion-item>
  
          <ion-button @click="agendar">Agendar</ion-button>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Detalhes',
    data() {
      return {
        servico: null,
        dataAgendamento: '',
        Detalhes:'',
        Localização:'',
        Disponibiidade:'',
        Contato:'',
        Materiais:'',

      };
    },
    methods: {
      agendar() {
        this.$router.push('/registro');
      },
    },
  });
  </script>
 