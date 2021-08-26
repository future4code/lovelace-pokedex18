import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomeScreen from "../screen/HomeScreen/HomeScreen"
import PokedexScreen from "../screen/PokedexScreen/PokedexScreen"
import DetailScreen from "../screen/DetailScreen/DetailScreen"


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomeScreen />
                </Route>

                <Route exact path={"/pokedex"}>
                    <PokedexScreen />
                </Route>

                <Route exact path={"/detalhes"}>
                    <DetailScreen />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
