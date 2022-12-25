import '../styles/Tasks.css';

function Tasks(props) {
  console.log(props);
  return (
    <div className="taskContainer">
      {props.tasks.map((element, index) => (
        <div key={index}>
          <p>{element.name}</p>
          <button onClick={props.addTask}>Add</button>
          <button
            onClick={() => {
              return props.deleteTask(index);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
