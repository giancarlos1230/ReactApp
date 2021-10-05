import { MostrarAlert } from "./component/alert";
import { MostrarAvatar }from './component/avatar'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <MostrarAlert altura="50px" ancho="500px" colorfondo="blue" colorText="white" texto="Default Alert"> </MostrarAlert>
        <MostrarAlert altura="50px" ancho="500px" colorfondo="black" colorText="green" texto="Sucess Alert"> </MostrarAlert>
        <MostrarAvatar
          imagen="90%"

         // alturImagen="100px"
         // anchuraImagen="100px"
          >
        </MostrarAvatar>

      </header>
    </div>
  );
}

export default App;
