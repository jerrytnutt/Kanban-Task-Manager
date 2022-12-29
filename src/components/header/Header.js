import '../../styles/Header.css';
import { useState } from 'react';
import { BsPlusSquare } from 'react-icons/bs';

import { BsCircleFill } from 'react-icons/bs';
import DeleteProjectWindow from './DeleteProjectWindow';
import CreateNewListForm from './CreateNewListForm';

function Header(props) {
  const [addListHidden, setaddListHidden] = useState(false);
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
                  let ar = [index, el.name];
                  return setshowDeletionForm(ar);
                }}
              />
            </div>
          </div>
        ))}

        <div className="plusSquare">
          <BsPlusSquare
            onClick={() => {
              setaddListHidden(true);
            }}
          />
        </div>
      </div>
      <div className="headerRight"></div>
      {showDeletionForm.length === 0 ? null : (
        <DeleteProjectWindow
          deleteProject={props.deleteProject}
          setshowDeletionForm={setshowDeletionForm}
          showDeletionForm={showDeletionForm}
        />
      )}

      {!addListHidden ? null : (
        <CreateNewListForm
          addFunc={props.addProject}
          closeBoard={setaddListHidden}
          item={{ name: 'Project' }}
        />
      )}
    </header>
  );
}

export default Header;
