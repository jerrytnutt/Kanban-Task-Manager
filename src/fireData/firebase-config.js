import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB3BRGJga5RHy9OtXpHMUuOApYp3lD-368',
  authDomain: 'kanban-14888.firebaseapp.com',
  projectId: 'kanban-14888',
  storageBucket: 'kanban-14888.appspot.com',
  messagingSenderId: '116878889516',
  appId: '1:116878889516:web:edbd1b11d11fead5b8b789',
  measurementId: 'G-BD3CE4WZX6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
