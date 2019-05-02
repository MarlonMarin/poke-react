import React, {Component} from "react";
//importamos bootstrap
import 'bootstrap/dist/css/bootstrap.css';

//inicio del componente inteligente  >:c quien se cree?
export default class Inicio extends Component{

   constructor(props) {
        super(props);
        //El contenedor de todo O-O dicen que contiene TODO :O
        this.state={
            //pero jamas los sentimientos de ella porque no existen
            pokemons:""
        }
    }
     componentWillMount=()=>{
        //metodo que carga los datos
        //objeto del protocolo http para peticiones
        var Http = new XMLHttpRequest();
        //variable para almacenar la url de la petición
        var url='https://www.mocky.io/v2/5cc78045320000af39b95260';
        //abrimos la conexion del protocolo REST, peticion=get y la url 
        Http.open("GET", url);
        //enviamos la petición
        Http.send();
        //en caso de respuesta positiva
        Http.onreadystatechange=(respuesta)=>{
            //console.log(Http.responseText)
            var objJson = Http.responseText;
            this.setState({
                pokemons:Http.response,
            });
            console.log(this.state);
        }

     }
    //render es un metodo que  debe retornar un html
    render(){
        return(
            <div className="row p-0 m-0  bg-dark" id="datos">
                <h1 className=" col-12 text-white text-center display-4 font-weight-bold">Combate</h1>
            </div>
        );
    }

}