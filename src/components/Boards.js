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

  const addTask = (a, b) => {
    return dispatch(projectsActions.addTask([props.projectIndex, a, b]));
  };

  const deleteTask = (a, b) => {
    return dispatch(projectsActions.deleteTask([props.projectIndex, a, b]));
  };

  const swapTasks = (board, index, switchBoard) => {
    // console.log(a, b);

    //console.log('pass');
    //if (a === 'left' && b !== 0) {
    //   console.log('can pass left');
    dispatch(
      projectsActions.swapTask([props.projectIndex, board, index, switchBoard])
    );
    // }
    // if (a === 'right' && b !== props.boardsList.length - 1) {
    //  console.log('can pass right');
    //  dispatch(projectsActions.swapTask([props.projectIndex, b, c, b + 1]));
    //}
    ///
    //
    ///
    //  console.log(props.boardsList.length);
    //if (ar.length === 2) {
    // ar.push(b);
    // return dispatch(
    //   projectsActions.swapTask([props.projectIndex, ar[0], ar[1], ar[2]])
    // );
    // }
    // ar.push(a);
    //ar.push(b);
  };

  const handleClick = (index) => {
    //console.log(index);
    if (elementSelected === -1) {
      //console.log()
      setelementSelected(index);
      return props.getBoardIndexes(index);
    }
    props.getBoardIndexes(index);
    return setelementSelected(-1);
    //console.log(parseInt(event.target.parentNode.id));
    // let elms = document.getElementById(index);
    //console.log(elms);
    //// let data = elms.getAttribute('data');
    //event.target.backgroundColor = 'green';
    //  if (elementSelected) {
    //  return setelementSelected(false);
    //}
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
            boardsListLength={boardsListLength}
            tasks={element.tasks}
            boardsIndex={index}
            addTask={addTask}
            deleteTask={deleteTask}
            swapTasks={swapTasks}
          />
        </div>
      ))}
      <div variant="primary" className="addNewBoard">
        <BsPlusSquare
          className="plusButton"
          onClick={() => {
            // props.addBoard('new');
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
