import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        updateIntersectionObserver: false,
        login: false,
        setLogin: async (login) => {
            set((state) => {
                if (state.login !== login) {
                    console.warn('SET login', login)
                    return { login: login }
                }
                return {}
            })
        },
        setUpdateIntersectionObserver: () => {
            set((state) => {
                state.updateIntersectionObserver = !state.updateIntersectionObserver;
                return { updateIntersectionObserver: state.updateIntersectionObserver }
            })
        },
    }
}))