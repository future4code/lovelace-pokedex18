import { Button, HeaderPokedex } from "./styled"
import { useHistory } from "react-router"
import { goToHomeScreen } from "../../routes/coordinator"


const PokedexScreen = () => {

    const history = useHistory()

    return (
        <div>
            <HeaderPokedex>
                 <Button onClick={() => goToHomeScreen(history)}>Voltar</Button>

                 <img src={"https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-5.png"} alt={"Logo de Pokemon"}/>
            </HeaderPokedex>
        </div>
    )
}

export default PokedexScreen