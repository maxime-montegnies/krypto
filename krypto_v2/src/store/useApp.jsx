import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        updateIntersectionObserver: false,
        page: 'yolo',
        setPage: async (page) => {
            set((state) => {
                if (state.page !== page) {
                    console.warn('SET page', page)
                    return { page: page }
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