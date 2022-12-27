import '../styles/Tasks.css';

function Tasks(props) {
  return (
    <div className="taskContainer">
      {props.tasks.map((element, index) => (
        <div key={index}>
          <p>{element.name}</p>
          <button
            onClick={() => {
              props.addTask(props.boardsIndex);
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              return props.deleteTask(props.boardsIndex, index);
            }}
          >
            delete
          </button>
          <button
            onClick={() => {
              return props.swapTasks(props.boardsIndex, index);
            }}
          >
            move
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
