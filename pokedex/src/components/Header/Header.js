import { Button, ContainerHeader } from "./styled"



const Header = () => {
    return (
        <div>
            <ContainerHeader>
                <Button>Ir para Pokédex</Button>

                <img src={"https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-5.png"} alt={"Logo de Pokemon"}/>
            </ContainerHeader>
        </div>
    )
}

export default Header