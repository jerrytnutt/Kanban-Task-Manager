//import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { projectsActions } from '../../features/projects';

function ProjectTabs() {
  const dispatch = useDispatch();
  // const projects = useSelector((state) => state.projects.projectsObject);
  const projects = [];

  const handleClick = (event) => {
    const data = event.target.getAttribute('data');
    console.log(data);
    dispatch(projectsActions.setCurrentProject(data));
  };
  const deleteProject = (event) => {
    const data = event.target.getAttribute('data');
    console.log(data);
    // dispatch(projectsActions.setCurrentProject(data));
  };

  return (
    <div>
      {projects.map((el, index) => (
        <div key={el.name}>
          <div data={index} onClick={handleClick}>
            {el.name}
          </div>
          <button data={index} onClick={deleteProject}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProjectTabs;
