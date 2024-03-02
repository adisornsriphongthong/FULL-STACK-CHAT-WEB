import { configureStore } from '@reduxjs/toolkit'
import userState from './states/user.state'

const store = configureStore({
    reducer: {
        user: userState
    }
})

export type rootState = ReturnType<typeof store.getState>
export default store