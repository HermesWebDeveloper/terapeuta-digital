import { Link } from 'react-router-dom';

function ListaConsultas() {


    return(
        <>
            <div className="overflow-hidden rounded-lg my-4">
                <table className="w-full border-collapse border-b">
                    <thead>
                        <tr className="bg-gray-200 h-14">
                            <th className="w-5">ID</th>
                            <th className="w-96">Paciente</th>
                            <th className="w-40">Data Consulta</th>
                            <th className="w-64">Observação</th>
                            <th className="w-52">Status</th>
                            <th className="w-40">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b h-14 font-semibold">
                            <td className="h-10 pl-5">1</td>
                            <td className="h-10 pl-5">Hermes Barbosa Pereira</td>
                            <td className="h-10 text-center">08/10/2024</td>
                            <td className="h-10">Cliente com histeria burocrática.</td>
                            <td className="h-10 text-center">Realizada</td>
                            <td className="h-10 text-center flex justify-center items-center gap-2">
                                <a>
                                    <Link to='1'>
                                        <img src="./imgs/editar.svg" width='25px'></img>
                                    </Link>
                                </a>
                                <a>
                                    <img src="./imgs/imprimir.svg" width='25px'></img>
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b h-14 font-semibold">
                            <td className="h-10 pl-5">1</td>
                            <td className="h-10 pl-5">Hermes Barbosa Pereira</td>
                            <td className="h-10 text-center">08/10/2024</td>
                            <td className="h-10">Cliente com histeria burocrática.</td>
                            <td className="h-10 text-center">Realizada</td>
                            <td className="h-10 text-center flex justify-center items-center gap-2">
                                <a>
                                    <img src="./imgs/editar.svg" width='25px'></img>
                                </a>
                                <a>
                                    <img src="./imgs/imprimir.svg" width='25px'></img>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListaConsultas;