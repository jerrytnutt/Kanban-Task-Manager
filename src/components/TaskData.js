import '../styles/taskdata.css';
import { useSelector } from 'react-redux';
function TaskData(props) {
  const projects = useSelector((state) => state.projects);
  const task =
    projects[props.projectIndex].boards[props.userView[0]].tasks[
      props.userView[1]
    ];

  //const task = props.boardsList[props.userView[0]].tasks[props.userView[1]];
  console.log(task);
  return (
    <div className="tdOuter">
      <div className="h">h</div>
      <div className="tdContents">
        <div className="left">L</div>
        <div className="right">R</div>
      </div>
    </div>
  );
}

export default TaskData;
