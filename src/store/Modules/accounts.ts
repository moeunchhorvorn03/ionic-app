import { accounts } from "@/interface/accounts"



const getters = {
    getAccounts (state: any) {
        return state.Accounts
    }
}

const mutations = {
    setAccounts (state: any, accountData: accounts) {
        state.Accounts = accountData
    }
}

const actions = {
    async setAccountData ({commit}: any, accountData: accounts) {
        try{
            await fetch('http://localhost:3001/accounts')
                .then((res) => res.json())
                .then((accountData) => {
                    commit('setAccounts', accountData)
                })
            } catch (error) {
                console.log(error)
            }
    }
}

export default {
    namespaced: true,
    state(){
        return {
            Accounts: [] as accounts []
        }
    },
    getters,
    actions,
    mutations
}
