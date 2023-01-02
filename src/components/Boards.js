import '../styles/Boards.css';
import { AiFillDelete } from 'react-icons/ai';
import { BiMoveHorizontal } from 'react-icons/bi';
import { BsPlusSquare } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import Tasks from './Tasks';
import SingleInputForm from './header/SingleInputForm';

import { projectsActions } from '../features/projects';

function Boards(props) {
  const dispatch = useDispatch();
  const [newBoard, setnewBoard] = useState(false);
  const [elementSelected, setelementSelected] = useState(-1);
  const boardsListLength = props.boardsList.length;

  // const tasks = props.element.tasks;

  //!
  // Adding new items can be done at a higher level
  //!!
  //!!
  //!!

  const addTask = (boardIndex, taskObj) => {
    return dispatch(
      projectsActions.addTask([props.projectIndex, boardIndex, taskObj])
    );
  };

  const deleteTask = (boardIndex, taskIndex) => {
    return dispatch(
      projectsActions.deleteTask([props.projectIndex, boardIndex, taskIndex])
    );
  };

  const swapTasks = (board, index, switchBoard) => {
    dispatch(
      projectsActions.swapTask([props.projectIndex, board, index, switchBoard])
    );
  };

  const handleClick = (index) => {
    if (elementSelected === -1) {
      setelementSelected(index);
      return props.swapBoards(index);
    }
    props.swapBoards(index);
    return setelementSelected(-1);
  };

  useEffect(() => {
    setelementSelected(-1);
  }, [props.projectIndex]);

  return (
    <>
      {props.boardsList.map((element, index) => (
        <div
          key={index}
          style={{
            backgroundColor:
              elementSelected === index ? 'yellow' : 'hsl(251, 56%, 15%)',
          }}
          className="boardContainer"
        >
          <div className="innerBoard">
            <div> {element.name}</div>
            <div>
              <AiFillDelete
                className="boardSvg"
                onClick={() => {
                  props.deleteBoard(index);
                }}
              />

              <BiMoveHorizontal
                className="boardSvg"
                onClick={() => {
                  handleClick(index);
                }}
              />
            </div>
          </div>
          <Tasks
            addTask={addTask}
            deleteTask={deleteTask}
            swapTasks={swapTasks}
            boardsListLength={boardsListLength}
            tasks={element.tasks}
            boardsIndex={index}
          />
        </div>
      ))}
      <div variant="primary" className="addNewBoard">
        <BsPlusSquare
          className="plusButton"
          onClick={() => {
            setnewBoard(true);
          }}
        />

        {!newBoard ? null : (
          <SingleInputForm
            addFunc={props.addBoard}
            closeBoard={setnewBoard}
            item={{ name: 'Board' }}
          />
        )}
      </div>
    </>
  );
}

export default Boards;
