import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IUser {
    id: string,
    username: string
}

const user = createSlice({
    name: 'user',
    initialState: {
        userState: {
            id: '',
            username: ''
        }
    },
    reducers: {
        setId: (state, action: PayloadAction<IUser>) => {
            state.userState.id = action.payload.id;
            state.userState.username = action.payload.username
        }
    }
})

export const { setId } = user.actions
export default user.reducer