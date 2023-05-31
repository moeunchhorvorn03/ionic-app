import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import homeRouter from './homeRouter'
import aclRouter from './aclRouter';

const RouterObject = [
  homeRouter,
  aclRouter
]

const routes: Array<RouteRecordRaw> = ([] as Array<RouteRecordRaw>).concat(
  ...RouterObject
)
 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
