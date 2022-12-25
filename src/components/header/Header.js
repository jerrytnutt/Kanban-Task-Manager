import '../../styles/Header.css';
import { useState } from 'react';

import CreateNewListForm from './CreateNewListForm';
import Button from 'react-bootstrap/Button';

function Header(props) {
  const [addListHidden, setaddListHidden] = useState(true);

  return (
    <header>
      <div className="headerLeft">
        {props.projectsArray.map((el, index) => (
          <div key={index}>
            <div
              data={index}
              onClick={() => {
                props.setprojectIndex(index);
              }}
            >
              {el.name}
            </div>
            <button
              data={index}
              onClick={() => {
                return props.deleteProject(index);
              }}
            >
              delete
            </button>
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
