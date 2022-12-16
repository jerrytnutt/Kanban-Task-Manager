import '../styles/PrimaryContent.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
//import { db } from '../fireData/firebase-config';
//import { collection } from 'firebase/firestore';

//import Account from './Account/Account';

function PrimaryContent() {
  const projects = useSelector((state) => state.projects);
  let listPage = null;
  console.log('currentProject:', projects.value);
  if (projects.value.currentProject !== null) {
    listPage = <div>List</div>;
  }
  useEffect(() => {
    const getDataForUser = async () => {
      //const userCol = await collection(db, 'users');
    };
    getDataForUser();
  }, []);

  return <div className="main">{listPage}</div>;
}

export default PrimaryContent;
