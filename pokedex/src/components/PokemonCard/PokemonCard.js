import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../../constants/urls"
import { CardContainer, Container, ContainerButton, Icon, Image, TopBar } from "./styled"


const PokemonCard = () => {

    // const renderPokemonImage = () => {
    //     axios.get(`${BASE_URL}/pokemons/1`)

    //     .then((res) => {
    //         console.log(res)
    //     })

    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

    return (
        <Container>
             <CardContainer>
                 <TopBar>
                     <Icon src={"https://image.flaticon.com/icons/png/512/188/188970.png"} alt={"Ícone da Pokebola"}/>
                 </TopBar> 

                 <Image>
                     <img src={""} alt={"Imagem de Pokemon"}/>
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