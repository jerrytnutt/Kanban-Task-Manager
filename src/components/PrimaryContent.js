import '../styles/PrimaryContent.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Boards from './Boards';
import { projectsActions } from '../features/projects';
import { useDispatch } from 'react-redux';
//import { db } from '../fireData/firebase-config';
//import { collection } from 'firebase/firestore';

//import Account from './Account/Account';

function PrimaryContent() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.value);

  let boardsList = null;
  const addBoard = (name) => {
    if (name.constructor.name === 'Object') {
      return dispatch(projectsActions.addNewBoard(name));
    }

    let filterdList = boardsList.filter(function (el) {
      return el.name !== name;
    });
    // Read!
    // Redo filter for add also? Better?
    dispatch(projectsActions.deleteBoard(filterdList));
  };
  let renderdContent = null;

  if (projects.currentProject !== null) {
    const currentProject = projects.projectsObject[projects.currentProject];
    boardsList = currentProject.boards;
    let name = currentProject.name;
    renderdContent = boardsList.map((element) => (
      <div key={element.name}>
        <Boards element={element} name={name} addBoard={addBoard} />
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
