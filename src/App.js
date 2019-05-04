import React from 'react';
import './App.css';
import Loadable from "react-loadable";
import 'bootstrap/dist/css/bootstrap.css';

//Lo que hace es que permite definir al App.js cuales son las rutas por donde se va a mover el usuario//
import {HashRouter, Route, Switch} from "react-router-dom";

/*aqui van las variables XC */
const loading = ()=> {return <div className="spinner-grow text-dark" role="status"><span className="sr-only">Loading...</span></div>}
//para las vistas
//inicio
const escenario = Loadable({
  loader: () => import('./vistas/escenario'),
  loading
});

function App() {
  return (
     <HashRouter>
      <Switch>
        <Route exact path="/escenario" name="escenario" component={escenario}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
