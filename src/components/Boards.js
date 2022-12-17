import '../styles/Boards.css';
import { useDispatch } from 'react-redux';
import { projectsActions } from '../features/projects';

function Boards(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(projectsActions.addNewProjectObject('Four'));
    // console.log(projects[key]);
  };
  console.log(props.element.name);
  return (
    <div className="boardsOuter">
      <button onClick={handleClick}>{props.element.name}</button>
    </div>
  );
}

export default Boards;
