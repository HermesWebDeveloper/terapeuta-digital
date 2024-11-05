import { useEffect, useState } from "react";

    function ExibirConsulta({ salvarDados, consulta }) {

        const [nome, setNome] = useState('');
        const [data, setData] = useState('');
        const [retorno, setRetorno] = useState('');
        const [qp, setQp] = useState('');
        const [hda, setHda] = useState('');
        const [prt, setPrt] = useState('');

        useEffect( () => {
            console.log(consulta.nome);
            if (consulta.nome) {
                setNome(consulta.nome);
                setData(consulta.data);
                setRetorno(consulta.retorno);
                setQp(consulta.qp);
                setHda(consulta.hda);
                setPrt(consulta.prt);
            };
        }, [consulta]);

        function prepararDados(e) {
            e.preventDefault();

            const dadosConsulta = {
                nome,
                data,
                retorno,
                qp,
                hda,
                prt
            };

            if (salvarDados){
                salvarDados(dadosConsulta);
            }
            };

        return(
            <>
                <div className="my-4 p-8 border border-gray-400 rounded-lg">
                    <form className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 justify-between">
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-col w-96">
                                    <label>Cliente:</label>
                                    <input type="text" className="border border-gray-400 rounded-lg px-2 py-1" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                                </div>
                                <div className="flex flex-col">
                                    <label>Data:</label>
                                    <input type="date" className="border border-gray-400 rounded-lg px-2 py-1" value={data} onChange={(e) => setData(e.target.value)}></input>
                                </div>
                                <div className="flex flex-col">
                                    <label>Retorno:</label>
                                    <input type="date" className="border border-gray-400 rounded-lg px-2 py-1" value={retorno} onChange={(e) => setRetorno(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <button className="px-4 h-10 bg-green-600 rounded-lg font-semibold hover:scale-105 transition-all" onClick={prepararDados}>Salvar</button>
                                <button className="px-4 h-10 bg-red-600 rounded-lg font-semibold hover:scale-105 transition-all">Excluir</button>
                                <button className="px-4 h-10 bg-blue-600 rounded-lg font-semibold hover:scale-105 transition-all">Imprimir</button>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label>Queixa Principal (QP):</label>
                            <textarea className="border border-gray-400 h-[100px] resize-none p-2 rounded-lg" value={qp} onChange={(e) => setQp(e.target.value)}></textarea>
                        </div>
                        <div className="flex flex-col">
                            <label>HDA:</label>
                            <textarea className="border border-gray-400 h-[100px] resize-none p-2 rounded-lg" value={hda} onChange={(e) => setHda(e.target.value)}></textarea>
                        </div>
                        <div className="flex flex-col">
                            <label>Programa de Recomendação Terapeutica:</label>
                            <textarea className="border border-gray-400 h-[300px] resize-none p-2 rounded-lg" value={prt} onChange={(e) => setPrt(e.target.value)}></textarea>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    export default ExibirConsulta;