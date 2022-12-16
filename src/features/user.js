import { createSlice } from '@reduxjs/toolkit';

let initialStateValue = {
  userName: false,
  userID: '',
};

const userSlice = createSlice({
  name: 'userData',
  initialState: initialStateValue,
  reducers: {
    setUserData: (state, action) => {
      state.value = action.payload;
    },
    resetUserData: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
