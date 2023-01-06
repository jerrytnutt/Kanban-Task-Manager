import { createSlice } from '@reduxjs/toolkit';

let initialStateValue = [
  {
    name: 'Notes',
    boards: [
      {
        name: 'To Do',
        tasks: [
          {
            name: 'Task2 One',
            description: '',
            subTasks: [{ name: 'one' }, { name: 'two' }],
          },
          { name: 'Task2 Two', description: '', subTasks: [] },
        ],
      },
      {
        name: 'Doing',
        tasks: [],
      },
      {
        name: 'Done',
        tasks: [],
      },
    ],
  },
  {
    name: 'Youtube',
    boards: [
      {
        name: 'two',
        tasks: [{ name: 'h', description: '', subTasks: [] }],
      },
    ],
  },
];

const projectsSlice = createSlice({
  name: 'projects',
  initialState: initialStateValue,
  reducers: {
    addProject: (state, action) => {
      state.push({
        name: action.payload,
        boards: [
          {
            name: 'To Do',
            tasks: [{ name: 'Task One', description: '', subTasks: [] }],
          },
        ],
      });
    },
    deleteProject: (state, action) => {
      state.splice(action.payload, 1);
    },
    addBoard: (state, action) => {
      const current = state[action.payload[0]].boards;
      current.push({ name: action.payload[1], tasks: [] });
    },
    deleteBoard: (state, action) => {
      console.log(action.payload);
      const current = state[action.payload[0]].boards;
      current.splice(action.payload[1], 1);
    },
    swapBoards: (state, action) => {
      const current = state[action.payload[0]].boards;
      let a = current[action.payload[1][0]];
      current[action.payload[1][0]] = current[action.payload[1][1]];
      current[action.payload[1][1]] = a;
    },
    addTask: (state, action) => {
      const current = state[action.payload[0]].boards[action.payload[1]].tasks;
      current.push(action.payload[2]);
    },
    deleteTask: (state, action) => {
      const current = state[action.payload[0]].boards[action.payload[1]].tasks;
      current.splice(action.payload[2], 1);
    },
    swapTask: (state, action) => {
      //console.log(action.payload);
      const current = state[action.payload[0]].boards[action.payload[1]].tasks;
      let a = current[action.payload[2]];
      let boardToSwitchTo =
        state[action.payload[0]].boards[action.payload[3]].tasks;
      boardToSwitchTo.push(a);
      //current[action.payload[2]] = current[action.payload[3]];
      //current[action.payload[3]] = a;
      current.splice(action.payload[2], 1);
    },
  },
});

export const projectsActions = projectsSlice.actions;

export default projectsSlice;
