


function Consultas() {


    return(
        <>
            <div className="my-4 mx-8">
                <div className="font-sans">
                    <h1 className="text-2xl font-bold text-slate-800 pb-2">Consultas</h1>
                    <div className="py-2">
                        <form className="flex gap-5">
                            <input type="date" className="bg-gray-200 rounded-lg px-2 py-1"></input>
                            <input type="text" className="bg-gray-200 rounded-lg px-2 py-1 w-96"></input>
                            <button className="bg-sky-600 rounded-lg px-4 py-1 text-gray-200 flex items-center text-center gap-2">
                                <span className="text-2xl align-middle mb-1">
                                    +
                                </span> 
                                <span className="align-middle">
                                    Nova Consulta
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="overflow-hidden rounded-lg border border-gray-300">
                    <table className="text-center w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200 h-10">
                                <th className="w-96">Paciente</th>
                                <th className="w-52">Data Consulta</th>
                                <th className="w-52">Data Retorno</th>
                                <th className="w-64">Observação</th>
                                <th className="w-52">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Exemplo</td>
                                <td>Exemplo</td>
                                <td>Exemplo</td>
                                <td>Exemplo</td>
                                <td>Exemplo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Consultas;