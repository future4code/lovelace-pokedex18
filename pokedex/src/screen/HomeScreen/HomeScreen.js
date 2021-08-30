import Header from "../../components/Header/Header"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { ContainerScreen } from "../../components/PokemonCard/styled"

const HomeScreen = () => {
    
    const pokemonsList = useRequestData(`${BASE_URL}/pokemon/?offset=20&limit=20`, {})

    const renderPokemonsList = pokemonsList[0].results && pokemonsList[0].results.map((pokemon) => {
            return <PokemonCard  key={pokemon.name} pokemons={pokemon.name}  />
    })

    
    return (
        <div>
            <Header />
            <ContainerScreen>
                 {renderPokemonsList}
            </ContainerScreen>
        </div>
    )
}

export default HomeScreen