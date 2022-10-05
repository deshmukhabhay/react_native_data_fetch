import {createSlice} from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    isLoading: false,
  },
  reducers: {
    startLoader(state) {
      state.isLoading = true
    },
    stopLoader(state) {
      state.isLoading = false
    },
  },
});

export const {startLoader, stopLoader} = loaderSlice.actions;
export default loaderSlice.reducer;
