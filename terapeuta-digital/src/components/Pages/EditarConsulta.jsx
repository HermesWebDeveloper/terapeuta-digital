import { useParams } from "react-router-dom";

function EditarConsulta() {

    const { id } = useParams();

    return(
        <>
            <h1>Editar consulta {id}</h1>
        </>
    )
}

export default EditarConsulta;