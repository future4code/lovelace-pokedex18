import Header from "../../components/Header/Header"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { useEffect, useState } from "react"
import axios from "axios"

const HomeScreen = () => {
    
    const [pokemonsList, setPokemonsList] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/pokemon/?offset=20&limit=20`)

        .then((res) => {
            console.log(res)
            setPokemonsList(res.data.results)
        })

        .catch((err) => {
            console.log(err)
        })
    }, [])

    const renderPokemonList = pokemonsList.map((pokemons) => {
        return <PokemonCard pokemons={pokemons} name={pokemons.name} key={pokemons.name} image={pokemons.sprites}/>
    })

       
    return (
        <div>
            <Header />
            {renderPokemonList}
        </div>
    )
}

export default HomeScreen