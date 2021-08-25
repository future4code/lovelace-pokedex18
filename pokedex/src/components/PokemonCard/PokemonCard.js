import { CardContainer, Container, ContainerButton, Icon, Image, TopBar } from "./styled"


const PokemonCard = () => {
    return (
        <Container>
             <CardContainer>
                 <TopBar>
                     <Icon src={"https://image.flaticon.com/icons/png/512/188/188970.png"} alt={"Ícone da Pokebola"}/>
                 </TopBar> 

                 <Image>
                    <img src={"https://sm.ign.com/t/ign_br/screenshot/default/025pikachu-os-anime-4_3pym.1200.png"} alt={"Imagem de Pokemon"}/>
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