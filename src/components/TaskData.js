import '../styles/taskdata.css';
import { useSelector } from 'react-redux';
function TaskData(props) {
  const projects = useSelector((state) => state.projects);
  const task =
    projects[props.projectIndex].boards[props.userView[0]].tasks[
      props.userView[1]
    ];

  //const task = props.boardsList[props.userView[0]].tasks[props.userView[1]];
  let subTasksArray = task.subTasks;
  console.log(subTasksArray);
  const handleChange = (index) => {
    console.log(index);
  };

  return (
    <div className="tdOuter">
      <div className="h">h</div>
      <div className="tdContents">
        <div className="left">
          {subTasksArray.map((el, index) => {
            return (
              <div key={index} className="input-group">
                <span className="input-group-text" id="basic-addon2">
                  {el.name}
                </span>
                <div className="input-group-text">
                  <input
                    className="form-check-input mt-0"
                    onChange={() => {
                      return handleChange(index);
                    }}
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  ></input>
                </div>
              </div>
            );
          })}
        </div>
        <div className="right">R</div>
      </div>
    </div>
  );
}

export default TaskData;
