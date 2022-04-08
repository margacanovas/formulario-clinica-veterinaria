import React from "react";

const Paciente = ({pacientes}) => {

    const {propietario, email, nombre, especie, fechas, sintomas} = pacientes

    //funcion para eliminar un paciente y preguntar al usuario si quiere eliminarlo

    return (
        <div className=" m-3 shadow-md px-5 py-10 rounded-xl">
            <p> Propietario: {propietario}</p>
            <p> Email: {email}</p>
            <p> Nombre: {nombre}</p>
            <p> Especie: {especie}</p>
            <p> Fechas: {fechas}</p>
            <p> Sintomas: {sintomas}</p>

        <input
          type="submit"
          className='bg-indigo-600 w-200 mr-12 p-3 text-white uppercase font-bold cursor-pointer transition-all rounded'
          value="Editar Paciente"
        />

        <input
          type="submit"
          className='bg-red-600 w-200 ml-12 p-3 text-white uppercase font-bold cursor-pointer transition-all rounded'
          value="Eliminar Paciente"
        />


        </div>
    )
}
export default Paciente