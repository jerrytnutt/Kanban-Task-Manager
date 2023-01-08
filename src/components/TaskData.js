import '../styles/taskdata.css';
import { useSelector, useDispatch } from 'react-redux';
import { projectsActions } from '../features/projects';

function TaskData(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const projects = useSelector((state) => state.projects);
  const task =
    projects[props.projectIndex].boards[props.userView[0]].tasks[
      props.userView[1]
    ];
  console.log(task.subTasks);

  //const task = props.boardsList[props.userView[0]].tasks[props.userView[1]];
  let subTasksArray = [];
  let completedArray = [];
  task.subTasks.map((el) => {
    if (el.complete === false) {
      subTasksArray.push(el);
    } else {
      completedArray.push(el);
    }
    return el;
  });

  const handleChange = (e) => {
    e.preventDefault();

    let index = task.subTasks.findIndex((i) => i.name === e.target.value);
    let userName = user.userName;

    dispatch(
      projectsActions.completeTask([
        props.projectIndex,
        props.userView[0],
        props.userView[1],
        index,
        userName,
      ])
    );
  };

  return (
    <div className="tdOuter">
      <div className="header">{task.name}</div>
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
                    onChange={handleChange}
                    type="checkbox"
                    checked={false}
                    value={el.name}
                    aria-label="Checkbox for following text input"
                  ></input>
                </div>
              </div>
            );
          })}
        </div>
        <div className="right">
          {completedArray.map((el, index) => {
            return (
              <div key={index} className="input-group">
                <span className="input-group-text" id="basic-addon2">
                  {el.name}
                </span>
                <span className="input-group-text" id="basic-addon2">
                  {el.complete}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TaskData;
