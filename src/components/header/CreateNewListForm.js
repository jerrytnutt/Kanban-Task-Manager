import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateNewListForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    props.addProject(formProps.name);
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
