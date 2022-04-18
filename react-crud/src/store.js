import { configureStore } from '@reduxjs/toolkit'
import voterSlice from './slices/voterSlice'

export default configureStore({
    reducer: {
        voter: voterSlice
    }
})