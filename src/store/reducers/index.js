import {configureStore} from '@reduxjs/toolkit';
import commentsReducer from './comments.js';
import loaderReducer from './loader.js';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    loader: loaderReducer,
  },
});
