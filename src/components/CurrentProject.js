import '../styles/CurrentProject.css';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { projectsActions } from '../features/projects';
import Boards from './Boards';
import TaskData from './TaskData';

function CurrentProject(props) {
  const dispatch = useDispatch();
  const userView = useSelector((state) => state.user.userView);

  const addBoard = (name) => {
    return dispatch(projectsActions.addBoard([props.projectIndex, name]));
  };
  const deleteBoard = (index) => {
    return dispatch(projectsActions.deleteBoard([props.projectIndex, index]));
  };

  const swapArray = [];
  const swapBoards = (num) => {
    if (swapArray.length === 1) {
      swapArray.push(num);
      return dispatch(
        projectsActions.swapBoards([props.projectIndex, swapArray])
      );
    }
    swapArray.push(num);
  };

  return (
    <>
      {userView.length === 0 ? (
        <div className="boardsOuter">
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
