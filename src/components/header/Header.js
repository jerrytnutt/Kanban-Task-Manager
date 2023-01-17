import '../../styles/Header.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsPlusSquare } from 'react-icons/bs';
import { BsCircleFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import SignInInput from './SignUpForm';
import DeleteProjectForm from './DeleteProjectForm';
import SingleInputForm from './SingleInputForm';
import { userActions } from '../../features/user';
import { auth } from '../../fireData/firebase-config';
import { signOut } from 'firebase/auth';

function Header(props) {
  const dispatch = useDispatch();
  const [showDeletionForm, setshowDeletionForm] = useState([]);
  const [showAdditionForm, setshowAdditionForm] = useState(false);
  const [showsignUpForm, setshowsignUpForm] = useState(true);

  const userName = useSelector((state) => state.user.value.userName);

  const signOutUser = () => {
    // Redux state is cleared when user signs out.
    signOut(auth)
      .then(() => {
        dispatch(userActions.resetUserData());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <header>
      {showsignUpForm ? (
        <SignInInput setshowsignUpForm={setshowsignUpForm} />
      ) : null}
      <div className="headerLeft">
        {props.projectsArray.map((el, index) => (
          <div className="projectTab" key={index}>
            <div
              className="projectName"
              onClick={() => {
                dispatch(userActions.resetUserView());
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
      <div className="headerRight">
        {userName ? (
          <Button
            onClick={() => {
              signOutUser();
            }}
            variant="primary"
          >
            Log Out
          </Button>
        ) : (
          <Button
            onClick={() => {
              setshowsignUpForm(true);
            }}
            variant="primary"
          >
            Sign Up
          </Button>
        )}
      </div>
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
