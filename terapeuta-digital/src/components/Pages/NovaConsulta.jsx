import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import ConsultaNova from "../Components/ConsultaNova";


function NovaConsulta() {

    async function salvarDados (dadosConsulta) {

        try {
            const response = await axios.post('http://localhost:10000/v1/consultas/', dadosConsulta);
            console.log('Dados salvos com sucesso: ', dadosConsulta);
        } catch (error) {
            console.error('Erro ao salvar dados: ', error);
        };
    };

    return(
        <>
            <div className="my-4 mx-8 font-sans">
                <div className="flex">
                    <div className="flex gap-3">
                        <div className="flex items-center">
                            <Link to='../consultas'>
                                <a href="#" className="flex items-center text-slate-800 bg-gray-300 rounded p-2 w-10 hover:w-12 transition-all">
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
                    <ConsultaNova salvarDados={salvarDados}/>
                </div>
            </div>
        </>
    )
}

export default NovaConsulta;