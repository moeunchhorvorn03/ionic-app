<template>
  <ion-app>
    <ion-page>
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list >
          <ion-item v-for="item in menuItems" class="menu-lists" button>
            <IonLabel>
              <RouterLink to="/account-list">
                {{ item }}
              </RouterLink>
            </IonLabel>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title class="link">
            <RouterLink  to="/">Prasac Bank</RouterLink>
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-router-outlet />
    </ion-page>
  </ion-page>
  </ion-app>
</template>

<script lang="ts">
import { IonButtons, IonApp, IonContent, IonRouterOutlet, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { 
    IonApp, 
    IonIcon,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonList,
    IonLabel,
    IonRouterOutlet,
    IonButtons
   },
  data () {
      return {
        menuItems: ['Home','Account','Deposit','Fund Transfer',
                'International FundTransfer','Check Managment',
                'Card','Loans','Payment','TopUp','Foreign Exchange',
                'Trade Finance','Virtual Account','Calculator']
      }
  },
})
</script>

<style scoped>
.link > a {
  text-decoration: none;
}
.card {
  display: flex;
  flex-direction: row;
}
</style>



