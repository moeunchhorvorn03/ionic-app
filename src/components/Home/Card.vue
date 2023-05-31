<template>
    <div>
        <ion-card v-for="account in accounts" :key="account.id" >
        <ion-card-header>
            <ion-card-title>{{ account.type }}</ion-card-title>
            <ion-card-subtitle><span>{{ account.accountID }}</span> <span>{{ account.nickname }}</span></ion-card-subtitle>
        </ion-card-header>
    
        <ion-card-content>
            <span class="amount">{{ account.amount }} USD</span>
        </ion-card-content>
    
        <ion-list>
            <ion-button fill="clear">Edit Nickname</ion-button>
            <ion-button fill="clear">Details</ion-button>
        </ion-list>
        </ion-card>
    </div>
  </template>
  
  <script lang="ts">
    import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
        components: { 
            IonButton,
            IonCard,
            IonCardContent,
            IonCardHeader,
            IonCardSubtitle,
            IonCardTitle,
            IonList
        },
        computed: {
            accounts () {
                return this.$store.getters['accountsModule/getAccounts']
        }
    }
    });
  </script>

<style scoped>
ion-card-subtitle {
    display: flex;
    flex-direction: row;
}
ion-card-subtitle,
ion-list
{
    display: flex;
    justify-content: space-between;
}
ion-card {
    width: 350px;
}
amount {
    display: flex;
    justify-content: end;
}
</style>