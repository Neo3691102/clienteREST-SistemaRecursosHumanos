import "./App.css";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/navegacion";

function App() {
  return (
    <div className="container">
      <Navegacion />
      <ListadoEmpleados />
    </div>
    
    
  );
}

export default App;
