import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
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
    }
}))