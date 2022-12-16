import { createSlice } from '@reduxjs/toolkit';

let initialStateValue = {
  currentProject: null,
  projectsObject: {
    One: { name: 'One', age: 50 },
    Two: { name: 'Two', age: 50 },
    Three: { name: 'Three', age: 50 },
  },
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState: { value: initialStateValue },
  reducers: {
    addNewProjectObject: (state, action) => {
      state.value.projectsObject[action.payload] = {
        name: action.payload,
        age: 50,
      };
    },
    setCurrentProject: (state, action) => {
      state.value.currentProject = action.payload;
    },
  },
});

export const projectsActions = projectsSlice.actions;

export default projectsSlice;
