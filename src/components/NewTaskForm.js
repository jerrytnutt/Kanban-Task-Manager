import '../styles/newtaskform.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewTaskForm(props) {
  const [subtasksArray, setsubTasksArray] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    formProps.subTasks = subtasksArray;
    props.addTask(props.boardsIndex, formProps);
    return props.setviewTaskForm(false);
  };
  const submitSubtask = () => {
    let el = document.getElementById('subtask');
    let newArray = [...subtasksArray];
    newArray.push(el.value);
    setsubTasksArray(newArray);
  };
  return (
    <>
      <div className="backG"></div>
      <div className="taskForm">
        <Form onSubmit={handleSubmit}>
          <h3>Add New Task</h3>
          <button
            onClick={() => {
              return props.setaddListHidden(true);
            }}
          >
            Close
          </button>
          <Form.Label>Name</Form.Label>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control name="name" type="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Control
              as="textarea"
              name="description"
              type="description"
              placeholder="Enter description..."
            />
          </Form.Group>
          <h3>Subtasks</h3>
          <ul className="list-group">
            {subtasksArray.map((el, index) => {
              return (
                <li key={index} className="list-group-item">
                  {el[0]}
                </li>
              );
            })}
          </ul>
          <div className="input-group mb-3">
            <input
              //  onSubmit={submitSubtask}
              type="text"
              id="subtask"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={submitSubtask}
              >
                Button
              </button>
            </div>
          </div>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default NewTaskForm;
