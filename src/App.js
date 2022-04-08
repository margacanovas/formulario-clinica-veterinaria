import { useState, useEffect } from 'react';
import React from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from './components/ListadoPacientes';


function App() {

  const [pacientes, setPacientes] = useState ([]);
  const [paciente1, setPaciente1] = useState ({});

  useEffect(() =>{
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse (localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();

},[]);

useEffect(() => {
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
}, [pacientes]);


  return (
    <div className="container mx-auto mt-20">
      <Header/>
        <div className='mt-12 md:flex'>
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            
          />

          <ListadoPacientes
          pacientes={pacientes}
          
          //eliminarPaciente={eliminarPaciente}
          />

        </div>
        
      
    </div>
  );
}

export default App;
