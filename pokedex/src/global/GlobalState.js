// import axios from "axios"
// import GlobalContext from "./GlobalContext"
// import BASE_URL from "../constants/urls"
// import { useEffect, useState } from "react"

// const GlobalState = (props) => {
//     const [pokemonsList, setPokemonsList] = useState([])

//     const getPokemons = () => {
//         axios.get(`${BASE_URL}/pokemon/?offset=20&limit=20`)

//         .then((res) => {
//             console.log(res.results)
//             setPokemonsList(res.results)
//         })
//         .catch((err) => {
//             console.log(err.results)
//         })
//     }

//     useEffect(() => {
//         getPokemons()
//     }, [])

//     const state = { pokemonsList }
//     const setters = {}
//     const requests = { getPokemons }

//     return (
//         <GlobalContext.Provider value={{state, setters, requests}}>
//               {props.children}
//         </GlobalContext.Provider>
//     )
// }

// export default GlobalState