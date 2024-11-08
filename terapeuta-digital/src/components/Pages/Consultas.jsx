import { Link } from "react-router-dom";
import IndicadoresConsultas from "../Components/IndicadoresConsultas";
import ListaConsultas from "../Components/ListaConsultas";
import { useEffect, useState } from "react";
import axios from 'axios';  

function Consultas() {

    const [consultas, setConsultas] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect( () => {
        buscarConsultas();
    }, [])

    async function buscarConsultas(){
        try {
            const response = await axios.get('http://localhost:10000/v1/consultas/search');
            setConsultas(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao buscar consultas: ', error);
        }
    };

    async function filtrarDatas(dataFiltro) {
        try {
            console.log(dataFiltro)
            const response = await axios.get(`http://localhost:10000/v1/consultas/filter`, {
                params: { dataFiltro: dataFiltro }
            });
            setConsultas(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Erro ao filtrar consultas por data: ', error);
        }
    };

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
                                <input type="date" className="bg-gray-200 rounded-lg px-2 py-1" value={filterData} onChange={(e) => {
                                    setFilterData(e.target.value);
                                    filtrarDatas(e.target.value);
                                }}></input>
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
                <ListaConsultas lista_consultas={consultas}/>
            </div>
        </>
    )
}

export default Consultas;