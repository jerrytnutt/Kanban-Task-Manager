import '../../styles/Header.css';
import { useState } from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import { BsCircleFill } from 'react-icons/bs';

import DeleteProjectForm from './DeleteProjectForm';
import SingleInputForm from './SingleInputForm';

function Header(props) {
  const [showAdditionForm, setshowAdditionForm] = useState(false);
  const [showDeletionForm, setshowDeletionForm] = useState([]);

  return (
    <header>
      <div className="headerLeft">
        {props.projectsArray.map((el, index) => (
          <div className="project" key={index}>
            <div
              className="projectName"
              onClick={() => {
                props.setprojectIndex(index);
              }}
            >
              {el.name}
            </div>
            <div>
              <BsCircleFill
                onClick={() => {
                  return setshowDeletionForm([index, el.name]);
                }}
              />
            </div>
          </div>
        ))}

        <div className="plusSquare">
          <BsPlusSquare
            onClick={() => {
              setshowAdditionForm(true);
            }}
          />
        </div>
      </div>
      <div className="headerRight"></div>
      {showDeletionForm.length > 0 ? (
        <DeleteProjectForm
          deleteProject={props.deleteProject}
          setshowDeletionForm={setshowDeletionForm}
          showDeletionForm={showDeletionForm}
        />
      ) : null}

      {showAdditionForm ? (
        <SingleInputForm
          addFunc={props.addProject}
          closeBoard={setshowAdditionForm}
          item={{ name: 'Project' }}
        />
      ) : null}
    </header>
  );
}

export default Header;
