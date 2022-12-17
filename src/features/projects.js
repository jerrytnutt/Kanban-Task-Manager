import { createSlice } from '@reduxjs/toolkit';

let initialStateValue = {
  currentProject: null,
  projectsObject: {
    One: {
      name: 'One',
      boards: [{ name: 'To Do' }, { name: 'Doing' }, { name: 'Done' }],
    },
    Two: {
      name: 'Two',
      boards: [{ name: 'To Do2' }, { name: 'Doing2' }, { name: 'Done2' }],
    },
    Three: {
      name: 'Three',
      boards: [{ name: 'To Do3' }, { name: 'Doing3' }, { name: 'Done3' }],
    },
  },
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState: { value: initialStateValue },
  reducers: {
    addNewProjectObject: (state, action) => {
      state.value.projectsObject[action.payload] = {
        name: action.payload,
        boards: [{ name: 'To Do4' }, { name: 'Doing4' }, { name: 'Done4' }],
      };
    },
    setCurrentProject: (state, action) => {
      state.value.currentProject = action.payload;
    },
  },
});

export const projectsActions = projectsSlice.actions;

export default projectsSlice;
