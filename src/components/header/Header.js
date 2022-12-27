import '../../styles/Header.css';
import { useState } from 'react';

import { BsCircleFill } from 'react-icons/bs';
import DeleteProjectWindow from './DeleteProjectWindow';
import CreateNewListForm from './CreateNewListForm';
import Button from 'react-bootstrap/Button';

function Header(props) {
  const [addListHidden, setaddListHidden] = useState(true);
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
      </div>
      <div className="headerRight">
        <Button
          variant="primary"
          onClick={() => {
            setaddListHidden(false);
          }}
        >
          Primary
        </Button>
      </div>
      {showDeletionForm.length === 0 ? null : (
        <DeleteProjectWindow
          deleteProject={props.deleteProject}
          setshowDeletionForm={setshowDeletionForm}
          showDeletionForm={showDeletionForm}
        />
      )}

      {addListHidden ? null : (
        <CreateNewListForm
          addProject={props.addProject}
          setaddListHidden={setaddListHidden}
        />
      )}
    </header>
  );
}

export default Header;
