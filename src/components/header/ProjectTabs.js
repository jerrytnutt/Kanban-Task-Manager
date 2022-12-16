import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { projectsActions } from '../../features/projects';

function ProjectTabs() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.value.projectsObject);

  const handleSelect = (key) => {
    dispatch(projectsActions.setCurrentProject(key));
    // console.log(projects[key]);
  };

  const tifOptions = Object.keys(projects).map((key) => (
    <Tab
      key={projects[key].name}
      eventKey={projects[key].name}
      title={projects[key].name}
    ></Tab>
  ));

  //  <Tab key={projects.call} eventKey="profile" title="Profile">

  return (
    <Tabs
      onSelect={handleSelect}
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      {tifOptions}
    </Tabs>
  );
}

export default ProjectTabs;
