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
  console.log(props.tasks);
  return (
    <div className="taskContainer">
      {props.tasks.map((element, index) => (
        <div className="innerTask" key={index}>
          <p>{element.name}</p>
          <div className="taskSvg">
            <AiFillDelete
              onClick={() => {
                return props.deleteTask(props.boardsIndex, index);
              }}
            />
            <BiMoveHorizontal
              onClick={() => {
                if (props.boardsIndex !== 0) {
                  return props.swapTasks(
                    props.boardsIndex,

                    index,
                    props.boardsIndex - 1
                  );
                }
              }}
            />
            <BiMoveHorizontal
              onClick={() => {
                if (props.boardsIndex + 1 !== props.boardsListLength)
                  return props.swapTasks(
                    props.boardsIndex,

                    index,
                    props.boardsIndex + 1
                  );
              }}
            />
            <button
              onClick={() => {
                dispatch(userActions.setUserView([props.boardsIndex, index]));
              }}
            >
              td
            </button>
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
      {viewTaskform ? (
        <NewTaskForm
          addTask={props.addTask}
          boardsIndex={props.boardsIndex}
          setviewTaskForm={setviewTaskForm}
        />
      ) : null}
    </div>
  );
}

export default Tasks;
