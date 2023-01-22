import '../styles/Boards.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';

import Tasks from './Tasks';
import SingleInputForm from './header/SingleInputForm';
import { projectsActions } from '../features/projects';

function Boards(props) {
  const dispatch = useDispatch();
  const [newBoard, setnewBoard] = useState(false);

  const boardsListLength = props.boardsList.length;

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

  return (
    <>
      {props.boardsList.map((element, index) => (
        <div key={index} className="boardContainer">
          <div className="innerBoard">
            <div> {element.name}</div>
            <div>
              <AiFillDelete
                className="boardSvg"
                onClick={() => {
                  props.deleteBoard(index);
                }}
              />
              {index > 0 ? (
                <AiFillCaretLeft
                  className="boardSvg"
                  onClick={() => {
                    props.swapBoards([index, index - 1]);
                  }}
                />
              ) : null}

              {index + 1 < props.boardsList.length ? (
                <AiFillCaretRight
                  className="boardSvg"
                  onClick={() => {
                    props.swapBoards([index, index + 1]);
                  }}
                />
              ) : null}
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
