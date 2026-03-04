import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/navegacion";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<ListadoEmpleados />} />
        </Routes>
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;
