import { configureStore} from '@reduxjs/toolkit';
import modelChoiceSliceReducer from './slices/chatSlice'


export const store = configureStore({
    reducer: {
        modelChoice: modelChoiceSliceReducer
    }
})
