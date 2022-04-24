import { configureStore } from '@reduxjs/toolkit'
import voterReducer from './slices/voterSlice'

export default configureStore({
    reducer: {
        voter: voterReducer
    }
})