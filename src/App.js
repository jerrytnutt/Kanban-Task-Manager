import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PrimaryContent from './components/PrimaryContent';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <PrimaryContent />
      </div>
    </DndProvider>
  );
}

export default App;
