import '../styles/CurrentProject.css';

import { useDispatch } from 'react-redux';
import { projectsActions } from '../features/projects';
import Boards from './Boards';

function CurrentProject(props) {
  const dispatch = useDispatch();

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
    <div className="boardsOuter">
      {props.boardsList.map((element, index) => (
        <Boards
          key={index}
          addBoard={addBoard}
          deleteBoard={deleteBoard}
          element={element}
          index={index}
          projectIndex={props.projectIndex}
          getNums={getNums}
        />
      ))}
    </div>
  );
}

export default CurrentProject;
