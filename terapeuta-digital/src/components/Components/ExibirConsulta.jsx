

function ExibirConsulta() {

    return(
        <>
            <div className="my-4 p-8 border rounded-lg">
                <form className="flex flex-col gap-3">
                    <div className="flex flex-row gap-3">
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col w-96">
                                <label>Cliente:</label>
                                <input type="text" className="border"></input>
                            </div>
                            <div className="flex flex-col">
                                <label>Data:</label>
                                <input type="date" className="border"></input>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label>Queixa Principal (QP):</label>
                        <textarea className="border h-[100px] resize-none p-2"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label>HDA:</label>
                        <textarea className="border h-[100px] resize-none p-2"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label>Programa de Recomendação Terapeutica:</label>
                        <textarea className="border h-[300px] resize-none p-2"></textarea>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ExibirConsulta;