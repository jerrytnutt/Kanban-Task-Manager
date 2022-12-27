import '../../styles/form.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DeleteProjectWindow(props) {
  const handleClick = (event) => {
    event.preventDefault();

    props.deleteProject(props.showDeletionForm[0]);
    props.setshowDeletionForm([]);
  };
  return (
    <div>
      <div className="listFormBackground"></div>
      <Form className="listForm">
        <button
          className="closeButton"
          onClick={() => {
            return props.setshowDeletionForm([]);
          }}
        >
          Close
        </button>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Delete Project {props.showDeletionForm[1]}?</Form.Label>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleClick}>
          Delete
        </Button>
      </Form>
    </div>
  );
}

export default DeleteProjectWindow;
