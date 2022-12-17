import '../styles/PrimaryContent.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Boards from './Boards';
//import { db } from '../fireData/firebase-config';
//import { collection } from 'firebase/firestore';

//import Account from './Account/Account';

function PrimaryContent() {
  const projects = useSelector((state) => state.projects.value);
  let renderdContent = null;

  if (projects.currentProject !== null) {
    const currentProject = projects.projectsObject[projects.currentProject];
    let boardsList = currentProject.boards;
    //console.log(boardsList);
    renderdContent = boardsList.map((element) => (
      <div key={element.name}>
        <Boards element={element} />
      </div>
    ));
    //console.log(renderdContent);
    //listPage = currentProject;
    //listPage = currentProject.boards.map((element) => {
    //  let name = element.name;
    // return <Boards key={element.name} element={element} />;
    // });
    // listPage = <div>List</div>;
  }
  useEffect(() => {
    const getDataForUser = async () => {
      //const userCol = await collection(db, 'users');
    };
    getDataForUser();
  }, []);

  return <div className="main">{renderdContent}</div>;
}

export default PrimaryContent;
