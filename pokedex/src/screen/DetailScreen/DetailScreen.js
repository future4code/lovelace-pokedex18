import { useParams } from "react-router"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"


const DetailScreen = () => {
    const params = useParams()

    const pokemon = useRequestData(`${BASE_URL}/pokemon/${params.nome}`)

    console.log(pokemon)

    return (
        <div>DetailScreen</div>
    )
}

export default DetailScreen