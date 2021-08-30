import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import { CardContainer, Container, ContainerButton, Icon, Image, TopBar } from "./styled"


const PokemonCard = (props) => {

    const renderPokemonImage = useRequestData(`${BASE_URL}/pokemon/${props.pokemons}`, {})

    return (
        <Container>
             <CardContainer>
                 <TopBar>
                     <Icon src={"https://image.flaticon.com/icons/png/512/188/188970.png"} alt={"Ícone da Pokebola"}/>
                 </TopBar> 

                 <Image>
                  <img src={renderPokemonImage[0].sprites && renderPokemonImage[0].sprites.versions['generation-v']['black-white'].animated.front_default} alt={"Imagem de Pokemon"} />
                </Image>

                 <ContainerButton>
                     <button>Adicionar a Pokécard</button>
                     <button>Ver Detalhes</button>
                 </ContainerButton>
            </CardContainer>
        </Container>
    )
}

export default PokemonCard