import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  loading: false
}

export const iuSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const {setLoading} = iuSlice.actions

export default iuSlice.reducer