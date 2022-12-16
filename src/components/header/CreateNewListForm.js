import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { projectsActions } from '../../features/projects';

function CreateNewListForm(props) {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    //console.log(event.target[0].value);
    //const elem = document.getElementById('formName');
    //console.log(elem.value);
    dispatch(projectsActions.addNewProjectObject('youtubeProject'));
  };
  return (
    <div>
      <div className="listFormBackground">
        <button
          onClick={() => {
            return props.setaddListHidden(true);
          }}
        >
          Close
        </button>
      </div>
      <Form className="listForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>name</Form.Label>
          <Form.Control name="name" type="name" placeholder="Enter name" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateNewListForm;
