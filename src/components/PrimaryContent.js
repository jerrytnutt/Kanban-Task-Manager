import '../styles/PrimaryContent.css';
import Header from './header/Header';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CurrentProject from './CurrentProject';

import { projectsActions } from '../features/projects';

function PrimaryContent() {
  const dispatch = useDispatch();
  const projectsArray = useSelector((state) => state.projects);
  const [projectIndex, setprojectIndex] = useState(0);

  const boardsList = projectsArray[projectIndex].boards;

  const addProject = (arg) => {
    dispatch(projectsActions.addProject(arg));
  };

  const deleteProject = (data) => {
    console.log(data, boardsList.length);
    if (data < projectIndex || data === boardsList.length - 1) {
      console.log(data);
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
