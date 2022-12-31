import '../../styles/form.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SingleInputForm(props) {
  console.log(props);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    props.addFunc(formProps.name);
  };
  return (
    <div>
      <div className="listFormBackground"></div>
      <Form className="listForm" onSubmit={handleSubmit}>
        <button
          className="closeButton"
          onClick={() => {
            return props.closeBoard(false);
          }}
        >
          Close
        </button>
        <h3>Add New {props.item.name}</h3>
        <Form.Label>Name</Form.Label>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control name="name" type="name" placeholder="Enter name" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SingleInputForm;
