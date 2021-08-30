export const goToHomeScreen = (history) => {
    history.push("/")
}

export const goToPokedexScreen = (history) => {
     history.push("/pokedex/")
}

export const goToDetailScreen = (history, nome) => {
    history.push(`/detalhes/${nome}`)
}