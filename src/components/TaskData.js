import '../styles/taskdata.css';
import { useSelector, useDispatch } from 'react-redux';
import { projectsActions } from '../features/projects';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

import { userActions } from '../features/user';

function TaskData(props) {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.value.userName);

  const projects = useSelector((state) => state.projects);

  const task =
    projects[props.projectIndex].boards[props.userView[0]].tasks[
      props.userView[1]
    ];

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
    // let userName = user.userName;
    console.log(
      props.projectIndex,
      props.userView[0],
      props.userView[1],
      index,
      userName
    );

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
    <div className="taskDataOuter">
      <div className="taskDataHeader">
        <BsFillArrowLeftSquareFill
          onClick={() => {
            dispatch(userActions.resetUserView());
          }}
          className="arrowButton "
        ></BsFillArrowLeftSquareFill>
        <p>{task.name}</p>
      </div>
      <div className="tdContents">
        <div className="left">
          <h2>SubTasks</h2>
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
            console.log(el);
            return (
              <div key={index} className="input-group">
                <span className="input-group-text" id="basic-addon2">
                  {el.name} completed by {el.complete}
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
