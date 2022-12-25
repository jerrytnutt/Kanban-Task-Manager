import { createSlice } from '@reduxjs/toolkit';

let initialStateValue = [
  {
    name: 'One',
    boards: [
      {
        name: 'To Do',
        tasks: [
          { name: 'Task One' },
          { name: 'Task Two' },
          { name: 'Task One' },
          { name: 'Task Two' },
        ],
      },
      {
        name: 'Doing',
        tasks: [
          { name: 'Task One' },
          { name: 'Task Two' },
          { name: 'Task One' },
          { name: 'Task Two' },
        ],
      },
      {
        name: 'Done',
        tasks: [
          { name: 'Task One' },
          { name: 'Task Two' },
          { name: 'Task One' },
          { name: 'Task Two' },
        ],
      },
    ],
  },
  {
    name: 'Two',
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
];

const projectsSlice = createSlice({
  name: 'projects',
  initialState: initialStateValue,
  reducers: {
    addProject: (state, action) => {
      state.push({
        name: action.payload,
        boards: [{ name: 'To Do' }, { name: 'Doing' }, { name: 'Done' }],
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
  },
});

export const projectsActions = projectsSlice.actions;

export default projectsSlice;
