import { Link } from "react-router-dom";
import IndicadoresConsultas from "../Components/IndicadoresConsultas";
import ListaConsultas from "../Components/ListaConsultas";
import NovaConsulta from "./NovaConsulta";

function Consultas() {


    return(
        <>
            <div className="my-4 mx-8 font-sans">
                <div className="">
                    <h1 className="text-2xl font-bold text-slate-800 pb-2">Consultas</h1>
                    <div className="my-4">
                        <IndicadoresConsultas />
                        <hr></hr>
                    </div>
                    <div className="py-2">
                        <form className="flex gap-5 justify-between">
                            <div className="flex gap-5">
                                <input type="date" className="bg-gray-200 rounded-lg px-2 py-1"></input>
                                <input type="text" className="bg-gray-200 rounded-lg px-2 py-1 w-96"></input>
                            </div>
                            <Link to='../novaconsulta'>
                                <button className="bg-slate-800 rounded-lg px-4 py-1 text-gray-200 flex items-center text-center gap-2 hover:scale-105 transition-all">
                                    <span className="text-2xl align-middle mb-1">
                                        +
                                    </span> 
                                    <span className="align-middle">
                                        
                                            Nova Consulta
                                        
                                    </span>
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
                <ListaConsultas />
            </div>
        </>
    )
}

export default Consultas;