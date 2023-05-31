import { createStore } from 'vuex'
import accountsModule from './Modules/accounts'

export default createStore({
    modules: {
        accountsModule
    }
})