import '../styles/Tasks.css';
import { AiFillDelete } from 'react-icons/ai';
import { BiMoveHorizontal } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { userActions } from '../features/user';
import NewTaskForm from './NewTaskForm';
import { useState } from 'react';

function Tasks(props) {
  const dispatch = useDispatch();
  const [viewTaskform, setviewTaskForm] = useState(false);
  const handleClick = () => {
    dispatch(userActions.setUserView('Task'));
  };
  return (
    <div className="taskContainer">
      {props.tasks.map((element, index) => (
        <div className="innerTask" key={index}>
          <p>{element.name}</p>
          <div>
            <AiFillDelete
              onClick={() => {
                return props.deleteTask(props.boardsIndex, index);
              }}
            />
            <BiMoveHorizontal
              onClick={() => {
                return props.swapTasks(props.boardsIndex, index);
              }}
            />
            <button onClick={handleClick}>td</button>
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          setviewTaskForm(true);
          // props.addTask(props.boardsIndex);
        }}
      >
        Add
      </button>
      {viewTaskform ? <NewTaskForm /> : null}
    </div>
  );
}

export default Tasks;
