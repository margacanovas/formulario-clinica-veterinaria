import React, { useState, useEffect } from 'react';
import Error from './Error';


const Formulario = (pacientes, setPacientes) => {

    const [propietario, setPropietario] = useState ('');
    const [email, setEmail] = useState ('');
    const [nombre, setNombre] = useState ('');
    const [especie, setEspecie] = useState ('');
    const [fechas, setFechas] = useState ('');
    const [sintomas, setSintomas] = useState ('');
    const [error, setError] = useState ('');


    useEffect(() =>{
        if( Object.keys(pacientes).length > 0){
            setPropietario(pacientes.propietario)
            setEmail (pacientes.email)
            setNombre (pacientes.nombre)
            setEspecie (pacientes.especie)
            setFechas (pacientes.fechas)
            setSintomas (pacientes.sintomas)
        }
  
    },[pacientes])

    const generarId=() => {
        const random = Math.random().toString(36).substring(2);
        const random2 = Date.now().toString(36);
  
        return random + random2
    }   

    const handleSubmit =(e) =>{
        e.preventDefault ();
        
        if([propietario,email,nombre,especie,fechas,sintomas].includes('')){
           setError (true)
            return;
        }   
            setError(false)

            const objetoPaciente ={
              propietario,
              email,
              nombre,
              especie,
              fechas,
              sintomas
            }
            
            objetoPaciente.id = generarId(); 
            setPacientes(objetoPaciente); 
            setPropietario ('')
            setEmail ('')
            setNombre ('')
            setEspecie ('')
            setFechas ('')
            setSintomas ('')
        }
        

    return ( 
        <div className="md:w1/2 lg:w-2/5">
        <h2 className='font-black text-3xl text-center uppercase'>Clinica Veterinaria</h2>
        <p className='text-lg mt-5 text-center mb-10'>
            Añade Pacientes y {''}
            <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form onSubmit={handleSubmit}
          className="bg-white shadow-md-rounded-lg py-10 px-5 mb-10">
        {error && <Error mensaje='Todos los campos son obligatorios'/>}
        
          
        <form className='bg-white shadow-md rounded-lg py-10 px-5'>

        <div className='mb-5'>
            <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre Propietario:</label>
            <input
                id="propietario"
                type="text"
                placeholder="Nombre Propietario"
                className="border-2 w-full p-2 mt2 placeholder-gray-400 rounded-md"
                value={propietario}
                onChange={(e) => setPropietario(e.target.value)}
                />
          </div>

          <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Correo Electronico:</label>
            <input
                id="email"
                type="email"
                placeholder="correo@correo.com"
                className="border-2 w-full p-2 mt2 placeholder-gray-400 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
          </div>

          <div className='mb-5'>
            <label htmlFor="nombre" className='block text-gray-700 uppercase font-bold'>Nombre Mascota:</label>
            <input
                id="nombre"
                type="text"
                placeholder="Nombre Mascota"
                className="border-2 w-full p-2 mt2 placeholder-gray-400 rounded-md"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
          </div>
        
          <div className='mb-5'>
            <label htmlFor="especie" className='block text-gray-700 uppercase font-bold'>Especie:</label>
            <select
      
                id="especie"
                className="border-2 w-full p-2 mt2 placeholder-gray-400 rounded-md"
                value={especie}
                onChange={(e) => setEspecie(e.target.value)}>
                <option value=""> Seleccione </option>
                <option value="Perro"> Perro </option>
                <option value="Gato"> Gato </option>
                <option value="Hamster"> Hamster</option>
                <option value="Pajaro"> Pajaro</option>
                <option value="Pez"> Pez</option>
                <option value="Otros">Otros, observaciones en sintomas</option>

            </select>
          </div>

          <div className='mb-5'>
            <label htmlFor="fechas" className='block text-gray-700 uppercase font-bold'>Fecha de alta:</label>
            <input
                id="fechas"
                type="date"
                placeholder=""
                className="border-2 w-full p-2 mt2 placeholder-gray-400 rounded-md"
                value={fechas}
                onChange={(e) => setFechas(e.target.value)}
                />
          </div>

          <div className='mb-5'>
            <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas:</label>
            <input
                id="sintomas"
                type="text"
                placeholder="Sintomas"
                className="border-2 w-full h-36 p-2 mt2 placeholder-gray-700 rounded-md"
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
                />
          </div>

          <input
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer transition-all rounded'
          value="Agregar paciente"
          />
          </form>
          </form>
          </div>





     );
}
 
export default Formulario;