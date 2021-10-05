//import logo from './logo.svg';
//import './App.css';

import { MostrarAlert } from "./component/alert";
import { MostrarAvatar }from './component/avatar'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <MostrarAlert altura="50px" ancho="500px" colorfondo="blue" colorText="white" texto="Default Alert"> </MostrarAlert>
        <MostrarAlert altura="50px" ancho="500px" colorfondo="black" colorText="green" texto="Sucess Alert"> </MostrarAlert>
        <MostrarAvatar
          imagen="100%"

          altura="128px"
          ancho="128px">
        </MostrarAvatar>

      </header>
    </div>
  );
}

export default App;
