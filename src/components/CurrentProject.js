import '../styles/CurrentProject.css';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { projectsActions } from '../features/projects';
import Boards from './Boards';
import TaskData from './TaskData';

function CurrentProject(props) {
  const dispatch = useDispatch();
  const userView = useSelector((state) => state.user.userView);

  const addBoard = (arg) => {
    return dispatch(projectsActions.addBoard([props.projectIndex, arg]));
  };
  const deleteBoard = (arg) => {
    return dispatch(projectsActions.deleteBoard([props.projectIndex, arg]));
  };
  let boardindexArray = [];
  const getBoardIndexes = (num) => {
    if (boardindexArray.length === 1) {
      boardindexArray.push(num);
      return dispatch(
        projectsActions.swapBoards([props.projectIndex, boardindexArray])
      );
    }
    boardindexArray.push(num);
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
            getBoardIndexes={getBoardIndexes}
          />
        </div>
      ) : (
        <TaskData />
      )}
    </>
  );
}

export default CurrentProject;
