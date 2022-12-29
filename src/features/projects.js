import { createSlice } from '@reduxjs/toolkit';

let initialStateValue = [
  {
    name: 'Notes',
    boards: [
      {
        name: 'To Do',
        tasks: [{ name: 'Task2 One' }, { name: 'Task2 Two' }],
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
        tasks: [{ name: 'Task2 One' }, { name: 'Task2 Two' }],
      },
      {
        name: 'three',
        tasks: [{ name: 'Task2 One' }, { name: 'Task2 Two' }],
      },
      {
        name: 'four',
        tasks: [{ name: 'Task2 One' }, { name: 'Task2 Two' }],
      },
    ],
  },
  {
    name: 'Green',
    boards: [
      {
        name: 'two',
        tasks: [{ name: 'Task2 One' }, { name: 'Task2 Two' }],
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
            name: 'one',
            tasks: [{ name: 'Task2 One' }, { name: 'Task2 Two' }],
          },
        ],
      });
    },
    deleteProject: (state, action) => {
      state.splice(action.payload, 1);
    },
    addBoard: (state, action) => {
      const current = state[action.payload[0]].boards;
      current.push({ name: action.payload[1], tasks: [{ name: 'new' }] });
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
      current.push({ name: 'new' });
    },
    deleteTask: (state, action) => {
      const current = state[action.payload[0]].boards[action.payload[1]].tasks;
      current.splice(action.payload[2], 1);
    },
    swapTask: (state, action) => {
      //console.log(action.payload);
      const current = state[action.payload[0]].boards[action.payload[1]].tasks;
      let a = current[action.payload[2]];
      current[action.payload[2]] = current[action.payload[3]];
      current[action.payload[3]] = a;
      // current.splice(action.payload[2], 1);
    },
  },
});

export const projectsActions = projectsSlice.actions;

export default projectsSlice;
