import '../styles/Tasks.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import NewTaskForm from './NewTaskForm';
import { BsPlusSquare } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { BiMoveHorizontal } from 'react-icons/bi';
import { userActions } from '../features/user';

function Tasks(props) {
  const dispatch = useDispatch();
  const [viewTaskform, setviewTaskForm] = useState(false);

  return (
    <>
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
              {props.boardsIndex !== 0 ? (
                <BiMoveHorizontal
                  onClick={() => {
                    return props.swapTasks(
                      props.boardsIndex,

                      index,
                      props.boardsIndex - 1
                    );
                  }}
                />
              ) : null}
              {props.boardsIndex + 1 !== props.boardsListLength ? (
                <BiMoveHorizontal
                  onClick={() => {
                    return props.swapTasks(
                      props.boardsIndex,

                      index,
                      props.boardsIndex + 1
                    );
                  }}
                />
              ) : null}

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
        <BsPlusSquare
          onClick={() => {
            setviewTaskForm(true);
            // props.addTask(props.boardsIndex);
          }}
        >
          Add
        </BsPlusSquare>
      </div>
      {viewTaskform ? (
        <NewTaskForm
          addTask={props.addTask}
          boardsIndex={props.boardsIndex}
          setviewTaskForm={setviewTaskForm}
        />
      ) : null}
    </>
  );
}

export default Tasks;
