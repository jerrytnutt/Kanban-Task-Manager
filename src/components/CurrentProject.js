import '../styles/CurrentProject.css';
import { db } from '../fireData/firebase-config';
import { doc, updateDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { projectsActions } from '../features/projects';
import Boards from './Boards';
import TaskData from './TaskData';

function CurrentProject(props) {
  const dispatch = useDispatch();
  const projectsArray = useSelector((state) => state.projects);
  // userView determines if the user is viewing the Boards of a project or a Single Task Page
  const userView = useSelector((state) => state.user.value.userView);
  const username = useSelector((state) => state.user.value.userName);

  const addBoard = (name) => {
    return dispatch(projectsActions.addBoard([props.projectIndex, name]));
  };
  const deleteBoard = (index) => {
    return dispatch(projectsActions.deleteBoard([props.projectIndex, index]));
  };

  const swapBoards = (arr) => {
    return dispatch(projectsActions.swapBoards([props.projectIndex, arr]));
  };
  /*
  Once the user signs in the projects will be requested from firebase
  and any changes will cause an update.

  */
  useEffect(() => {
    async function fetchData() {
      if (username !== false && projectsArray[0].name !== 'Example Project') {
        var ref = doc(db, 'projects', 'projectCollection');

        await updateDoc(ref, {
          array: projectsArray,
        });
      }
    }
    fetchData();
  }, [projectsArray, username]);

  return (
    <>
      {userView.length === 0 ? (
        <div className="outerBoard">
          <Boards
            addBoard={addBoard}
            deleteBoard={deleteBoard}
            swapBoards={swapBoards}
            boardsList={props.boardsList}
            projectIndex={props.projectIndex}
          />
        </div>
      ) : (
        <TaskData projectIndex={props.projectIndex} userView={userView} />
      )}
    </>
  );
}

export default CurrentProject;
