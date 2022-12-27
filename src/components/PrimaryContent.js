import '../styles/PrimaryContent.css';

import Header from './header/Header';
import CurrentProject from './CurrentProject';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { projectsActions } from '../features/projects';

function PrimaryContent() {
  const [projectIndex, setprojectIndex] = useState(0);
  const projectsArray = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const boardsList = projectsArray[projectIndex].boards;

  const addProject = (arg) => {
    dispatch(projectsActions.addProject(arg));
  };

  const deleteProject = (data) => {
    console.log(data, projectIndex);
    if (data < projectIndex || projectIndex === projectsArray.length - 1) {
      const newIndex = projectIndex - 1;
      setprojectIndex(newIndex);
    }

    dispatch(projectsActions.deleteProject(data));
  };

  useEffect(() => {
    const getDataForUser = async () => {
      //const userCol = await collection(db, 'users');
    };
    getDataForUser();
  }, []);

  return (
    <div>
      <Header
        addProject={addProject}
        deleteProject={deleteProject}
        projectsArray={projectsArray}
        setprojectIndex={setprojectIndex}
      />
      <CurrentProject projectIndex={projectIndex} boardsList={boardsList} />
    </div>
  );
}

export default PrimaryContent;
