import '../styles/PrimaryContent.css';

import Header from './header/Header';
import CurrentProject from './CurrentProject';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../fireData/firebase-config';
import { doc, getDoc } from 'firebase/firestore';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { projectsActions } from '../features/projects';
import { userActions } from '../features/user';

function PrimaryContent() {
  const [projectIndex, setprojectIndex] = useState(0);
  const projectsArray = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const boardsList = projectsArray[projectIndex].boards;

  const addProject = (name) => {
    dispatch(projectsActions.addProject(name));
  };

  const deleteProject = (data) => {
    if (data < projectIndex || projectIndex === projectsArray.length - 1) {
      const newIndex = projectIndex - 1;
      setprojectIndex(newIndex);
    }

    dispatch(projectsActions.deleteProject(data));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // Triggers with 'Create Account, Sign Out, Log In'
      if (user) {
        const getDataForUser = async () => {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            // If the user account already exist get the data from the firestore and
            // add to state.
            // dispatch(invoiceList.setinvoiceData(docSnap.data().Invoices));

            dispatch(userActions.setUserData(docSnap.data().userData));
          }
        };

        return getDataForUser();
      }
    });
  }, [dispatch]);

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
