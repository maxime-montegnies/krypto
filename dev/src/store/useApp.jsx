import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        updateIntersectionObserver: false,
        login: false,
        savedFilters: {},
        setLogin: async (login) => {
            set((state) => {
                if (state.login !== login) {
                    console.warn('SET login', login)
                    return { login: login }
                }
                return {}
            })
        },
        setSavedFilters: async (filter) => {
            set((state) => {
                if (state.savedFilters[filter.namespace] !== filter) {
                    console.warn('SET filter', filter)
                    state.savedFilters[filter.namespace] = filter;
                    return { savedFilters: state.savedFilters }
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