import {createSlice} from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    data: [],
  },
  reducers: {
    fetchComments(state, action) {
      state.data = action.payload;
    },
    resetComments(state) {
      state.data = [];
    },
  },
});

export const {fetchComments, resetComments} = commentsSlice.actions;
export default commentsSlice.reducer;
