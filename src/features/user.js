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
      state.value = action.payload;
    },
    resetUserData: (state) => {
      state.value = initialStateValue;
    },
    setUserView: (state) => {
      state.value.userView = 'TaskData';
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
