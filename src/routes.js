import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from "./pages/home";
import Cadastro from "./pages/cadastro";

const Routes = () => {
   return(
    <BrowserRouter>
        <Switch>
           <Route component = { Home }  path="/" exact />
           <Route component = { Cadastro }  path="/cadastro" />
        </Switch>
       </BrowserRouter>
   )
}

export default Routes;