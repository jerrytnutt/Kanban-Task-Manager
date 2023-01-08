import { createSlice } from '@reduxjs/toolkit';

let initialStateValue = {
  userName: false,
  userID: '',
  userView: [],
  userImg: '',
};

const userSlice = createSlice({
  name: 'userData',
  initialState: { value: initialStateValue },
  reducers: {
    setUserData: (state, action) => {
      state.value = action.payload;
    },
    resetUserData: (state) => {
      state.value = initialStateValue;
    },
    setUserView: (state, action) => {
      state.userView = action.payload;
    },
    resetUserView: (state, action) => {
      state.userView = [];
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
