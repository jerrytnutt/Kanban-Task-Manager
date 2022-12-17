import '../styles/Boards.css';
//import { useDispatch } from 'react-redux';
//import { projectsActions } from '../features/projects';

function Boards(props) {
  //const dispatch = useDispatch();

  const handleClick = (arg) => {
    //dispatch(projectsActions.addNewProjectObject('Four'));
    // console.log(projects[key]);

    props.addBoard(arg);
  };

  return (
    <div className="boardsOuter">
      <div>
        {props.element.name}
        <button
          onClick={() => {
            handleClick(props.element.name);
          }}
        >
          delete
        </button>
      </div>
      <button
        onClick={() => {
          handleClick({ name: 'New Board' });
        }}
      >
        add new
      </button>
    </div>
  );
}

export default Boards;
