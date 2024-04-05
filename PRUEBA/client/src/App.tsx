import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Listas from './views/Listas.jsx';
import FormularioTasks from './views/FormularioTasks';
import FormularioProductos from './views/FormularioProductos.jsx';



function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='' element={<Listas/>}/>
        <Route path='/createTask' element={<FormularioTasks/>}/>
        <Route path='/createProduct' element={<FormularioProductos/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
