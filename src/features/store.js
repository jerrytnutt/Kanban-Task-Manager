import { configureStore } from '@reduxjs/toolkit';

import userSlice from './user';
import projectsSlice from './projects';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    projects: projectsSlice.reducer,
  },
});

export default store;
