import { Link } from 'react-router-dom';
import { format } from 'date-fns';

function ListaConsultas({ lista_consultas }) {


    return(
        <>
            <div className="overflow-hidden rounded-lg my-4">
                <table className="w-full border-collapse border-b">
                    <thead>
                        <tr className="bg-gray-200 h-14">
                            <th className="w-5">ID</th>
                            <th className="w-80">Paciente</th>
                            <th className="w-40">Data Consulta</th>
                            <th className="w-40">Data Retorno</th>
                            <th className="w-40">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista_consultas.map( (consulta) => (
                            <tr className="border-b h-14 font-semibold">
                                <td className="h-10 pl-5">{consulta.consulta_id}</td>
                                <td className="h-10 pl-5">{consulta.nome}</td>
                                <td className="h-10 text-center">{format(new Date(consulta.data), 'dd/MM/yyyy')}</td>
                                <td className="h-10 text-center">{format(new Date(consulta.retorno), 'dd/MM/yyyy')}</td>
                                <td className="h-10 text-center flex justify-center items-center gap-2">
                                    <div>
                                        <Link to={`./${consulta.consulta_id}`}>
                                            <img src="./imgs/editar.svg" width='25px'></img>
                                        </Link>
                                    </div>
                                    <div>
                                        <img src="./imgs/imprimir.svg" width='25px'></img>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListaConsultas;