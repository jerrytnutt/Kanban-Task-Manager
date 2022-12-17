import '../../styles/Header.css';
import { useState } from 'react';
import CreateNewListForm from './CreateNewListForm';
import Button from 'react-bootstrap/Button';
import ProjectTabs from './ProjectTabs';

//import Account from './Account/Account';

//import { userDataActions } from '../features/userDataReducer';

function Header() {
  const [addListHidden, setaddListHidden] = useState(true);

  return (
    <header>
      <div className="headerLeft">
        <ProjectTabs />
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
        <CreateNewListForm setaddListHidden={setaddListHidden} />
      )}
    </header>
  );
}

export default Header;
