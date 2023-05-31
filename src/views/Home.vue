<template>
  <ion-content class="ion-padding">
        <ion-title>Account</ion-title>
        <Card class="card"/>
      </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonTitle } from '@ionic/vue';
  import { defineComponent } from 'vue';
import Card from '../components/Home/Card.vue';
import { mapActions } from 'vuex'
  export default defineComponent({
    components: {
    IonContent,
    IonTitle,
    Card
},
    
    watch: {
      '$route' () {

      }
    },
    methods : {
      ...mapActions('accountsModule',[
        'setAccountData'
      ])
    },
    created() {
       this.setAccountData()
    },
  });
</script>


<style scoped>

</style>