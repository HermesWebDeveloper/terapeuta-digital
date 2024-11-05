import { Link, useParams } from "react-router-dom";
import ExibirConsulta from "../Components/ExibirConsulta";
import { useEffect, useState } from "react";
import axios from 'axios';

function EditarConsulta() {

    const [consulta, setConsulta] = useState({});
    const { id } = useParams();

    useEffect569(() => {
        buscarConsultas();
    }, [id]);

    async function buscarConsultas(){
        try {
            const response = await axios.get(`http://localhost:10000/v1/consultas/${id}`);
            setConsulta(response.data);
        } catch (error) {
            console.error('Erro ao buscar consultas: ' + error);
        }
    };

    return(
        <>
            <div className="my-4 mx-8 font-sans">
                <div className="flex">
                    <div className="flex gap-3">
                        <div className="flex items-center">
                            <Link to='../consultas'>
                                <div href="#" className="flex items-center text-slate-800 bg-gray-300 rounded p-2 w-10 hover:w-12 transition-all">
                                    <img src="/imgs/voltar.svg"></img>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Voltar à listagem</p>
                            <h2 className="text-2xl font-semibold">Detalhes da Consulta</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <ExibirConsulta consulta={consulta} />
                </div>
            </div>
        </>
    )
}

export default EditarConsulta;