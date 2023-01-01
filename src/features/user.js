import { createSlice } from '@reduxjs/toolkit';

let initialStateValue = {
  userName: false,
  userID: '',
  userView: [],
};

const userSlice = createSlice({
  name: 'userData',
  initialState: initialStateValue,
  reducers: {
    setUserData: (state, action) => {
      state = action.payload;
    },
    resetUserData: (state) => {
      state = initialStateValue;
    },
    setUserView: (state, action) => {
      state.userView = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
