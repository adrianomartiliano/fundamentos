/* CSS */
import './App.css';

//Componentes
import FirstComponent from './components/FirstComponent.js';
import TemplateExpression from './components/TemplateExpression';
import Events from './components/Events';
import Soma from './components/Soma';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos - Componentes</h1>
      <FirstComponent />
      <TemplateExpression />
      <Events />
      <Soma />
    </div>
    
  );
}

export default App;
