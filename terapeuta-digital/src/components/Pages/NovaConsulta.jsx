import { Link } from "react-router-dom";
import ExibirConsulta from "../Components/ExibirConsulta";


function NovaConsulta() {

    return(
        <>
            <div className="my-4 mx-8 font-sans">
                <div className="flex">
                    <div className="flex gap-3">
                        <div className="flex items-center">
                            <Link to='../consultas'>
                                <a href="#" class="flex items-center text-slate-800 bg-gray-300 rounded p-2 w-10 hover:w-12 transition-all">
                                    <img src="/imgs/voltar.svg"></img>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Voltar à listagem</p>
                            <h2 className="text-2xl font-semibold">Nova Consulta</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <ExibirConsulta />
                </div>
            </div>
        </>
    )
}

export default NovaConsulta;