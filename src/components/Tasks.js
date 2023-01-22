import '../styles/Tasks.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import NewTaskForm from './NewTaskForm';

import { BsPlusSquare, BsFillDoorOpenFill } from 'react-icons/bs';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';

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
                <AiFillCaretLeft
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
                <AiFillCaretRight
                  onClick={() => {
                    return props.swapTasks(
                      props.boardsIndex,

                      index,
                      props.boardsIndex + 1
                    );
                  }}
                />
              ) : null}
              <BsFillDoorOpenFill
                onClick={() => {
                  dispatch(userActions.setUserView([props.boardsIndex, index]));
                }}
              />
            </div>
          </div>
        ))}
        <BsPlusSquare
          className="addTask"
          onClick={() => {
            setviewTaskForm(true);
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
