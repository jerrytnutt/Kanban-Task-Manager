import '../styles/CurrentProject.css';

import { useDispatch } from 'react-redux';
import { projectsActions } from '../features/projects';
import { useSelector } from 'react-redux';
import Boards from './Boards';
import TaskData from './TaskData';

function CurrentProject(props) {
  const dispatch = useDispatch();
  const userView = useSelector((state) => state.user.userView);
  //console.log(userView);

  let ar = [];

  const addBoard = (name) => {
    return dispatch(projectsActions.addBoard([props.projectIndex, name]));
  };
  const deleteBoard = (arg) => {
    return dispatch(projectsActions.deleteBoard([props.projectIndex, arg]));
  };
  const getNums = (num) => {
    if (ar.length === 1) {
      ar.push(num);

      return dispatch(projectsActions.swapBoards([props.projectIndex, ar]));
    }
    ar.push(num);
  };

  return (
    <>
      {userView.length === 0 ? (
        <div className="boardsOuter">
          <Boards
            addBoard={addBoard}
            deleteBoard={deleteBoard}
            boardsList={props.boardsList}
            projectIndex={props.projectIndex}
            getNums={getNums}
          />
        </div>
      ) : (
        <TaskData />
      )}
    </>
  );
}

export default CurrentProject;
