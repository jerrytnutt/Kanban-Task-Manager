import '../styles/Boards.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Tasks from './Tasks';

import { projectsActions } from '../features/projects';

function Boards(props) {
  console.log(props.element.name);
  const dispatch = useDispatch();
  const [elementSelected, setelementSelected] = useState(false);
  const tasks = props.element.tasks;

  const addTask = (index) => {
    // console.log(props.projectIndex, props.index, index);
    return dispatch(projectsActions.addTask([props.projectIndex, props.index]));
  };

  const deleteTask = (index) => {
    return dispatch(
      projectsActions.deleteTask([props.projectIndex, props.index, index])
    );
  };

  const handleClick = (event) => {
    if (!elementSelected) {
      props.getNums(props.index);
      return setelementSelected(true);
    }
  };
  useEffect(() => {
    setelementSelected(false);
  }, [props.element.name]);

  return (
    <div
      className="boardContainer"
      style={{
        backgroundColor: !elementSelected ? 'green' : 'blue',
      }}
    >
      <div>
        {props.element.name}
        <button
          onClick={() => {
            props.deleteBoard(props.index);
          }}
        >
          delete
        </button>
      </div>
      <button
        onClick={() => {
          props.addBoard('new');
        }}
      >
        add new
      </button>
      <button onClick={handleClick}>move</button>

      <Tasks tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
    </div>
  );
}

export default Boards;
