import { useHistory } from "react-router-dom"
import { goToPokedexScreen } from "../../routes/coordinator"
import { Button, ContainerHeader } from "./styled"



const Header = () => {
    const history = useHistory()

    return (
        <div>
            <ContainerHeader>
                <Button onClick={() => goToPokedexScreen(history)}>Ir para Pokédex</Button>

                <img src={"https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-5.png"} alt={"Logo de Pokemon"}/>
            </ContainerHeader>
        </div>
    )
}

export default Header