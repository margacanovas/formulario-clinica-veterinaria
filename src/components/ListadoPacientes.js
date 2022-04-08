import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {
    return (
        <div className="w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
        

            <h2 className="font-black text-3xl text-center uppercase">Listado Pacientes</h2>
                <p className=" text-xl mt-5 mb-10 text-center">
                    Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>
                {/*mapear todos los pacientes disponibles
                .map sirve para iterar en un Array*/}
                {/*{pacientes.map(paciente =>(
                  <Paciente
                    key={paciente.id}
                    pacientes={pacientes}
                    eliminarPaciente={eliminarPaciente}
                  />

                ))}*/}
                
                <Paciente
                    pacientes={pacientes}
                />
     {/* si no existe un paciente , cambiamos el front para que diga que no hay pacientes, 
     agregar primer paciente y lo mostramos en pantalla*/}
        </div>
    )
}
export default ListadoPacientes