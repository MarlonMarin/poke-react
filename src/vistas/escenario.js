import React, {Component} from "react";
//importamos bootstrap
import './escenario.css'
import 'bootstrap/dist/css/bootstrap.css';
import Bcombate from '../Componentes/barraCombate';
import CardLife from '../Componentes/cardLife';
import  fondo  from  '../sonidos/FondoSonido.mp3' ;



//inicio del componente inteligente  >:c quien se cree?
export default class escenario extends Component{

   constructor(props) {
        super(props);
        //El contenedor de todo O-O dicen que contiene TODO :O
        this.state={
            error: null,
            isLoaded: false,
            //pero jamas los sentimientos de ella porque no existen
                pokemon1: "",
                life1:"",
                pokemon2: "",
                life2:""
        }
        this.Atacar = this.Atacar.bind(this); 
    }
    componentDidMount() {
        var fondoS = document.getElementById("FondoSonido");
        //metodo que carga los datos
        //objeto del protocolo http para peticiones
        fetch("http://www.mocky.io/v2/5ccdd97d2e00009a38182b29")
        //cuando responda la respuesta se comvierte en json
        .then(res => res.json())
        //cuando el resultado llegue paselo al state
        .then(
        (result) => {
            this.setState({
                //agreegamos el obj json al state
                isLoaded: true,
                pokemon1: result[0],
                pokemon2: result[1],
                life1: result[0].nuLife,
                life2:result[1].nuLife
            });
        },
        // Note: es importante agregar los errores
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }// no tengo excepciones :c
      )
    }

    actualizarEstado(nEstado){
        this.setState(state=>({
            life2:nEstado
        }));
    }

    Atacar(life1,life2,daño){
        var ataqueRandom = Math.floor(Math.random() *4);
        var defensaRandom = Math.floor(Math.random() *4);

        var Catk=[20,20,30,10];
        var Cdef=[5,10,15,20];
        var Bdef=[10,15,20,30];

        if(daño - Cdef[defensaRandom] >=0){
            daño = daño - Cdef[defensaRandom];
        }
        console.log("daño charizard " + daño)
        if(life1<daño){
            life1 = life1 -life1;
            }else{
                life1 =life1 -daño;
            }

        if(Catk[ataqueRandom] - Bdef[defensaRandom] >=0){
            Catk[ataqueRandom] = Catk[ataqueRandom] - Bdef[defensaRandom];
        }else{
            Catk[ataqueRandom] = 0;
        }
            if(life2<Catk[ataqueRandom]){
                life2 = life2 -life2;
            }else{
                life2 =life2 -Catk[ataqueRandom];
            }
            console.log("daño Blastoide " + Catk[ataqueRandom])
        this.setState({
            life1:life1,
            life2:life2
        })
        if(life1 ===0 && life2 ===0){
            window.alert("Empate");
        }else if(life1 ===0 && life2 >0){
            window.alert("Ganaste");
        }else if(life2 === 0 && life1 >0){
            window.alert("Perdiste");
        }
    }

    //render es un metodo que  debe retornar un html
    render(){
        const { error, isLoaded, pokemon1, pokemon2,life1,life2} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }else if (!isLoaded) {
          return <div className="spinner-border " role="status">
                  <span className="sr-only justify-content-center align-items-center">Loading...</span>
                </div>
        } else if (isLoaded){
            return (
            <div className="">
            <audio loop autoPlay id="FondoSonido">
                < source src={fondo} type="audio/mp3"/>
            </audio>
             <div className="row ">
                    <div className="col-6 w-100 flex-column">
                        <div className="col-7">
                            <CardLife
                                stName={pokemon2.stName}
                                life={life2}
                                nvl={pokemon2.nuDf}
                            />
                            <img className="w-100 mb-2"src={pokemon2.urlImg}/>
                        </div>
                    </div>
                    <div className="col-6 w-100 d-flex justify-content-end">
                        <div className="col-8 ">
                            <img className="w-100"src={pokemon1.urlImg}/>
                            <CardLife
                                stName={pokemon1.stName}
                                life={life1}
                                nvl={pokemon1.nuDf}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-white m-0 p-4 bg-img d-flex w-100 text-center justify-content-center align-items-center shadow fixed-bottom">
                    <div className="col-3"><h2 className="">¿Cómo quieres que Ataque </h2><h2 className="">{pokemon2.stName}?</h2></div>
                        <div className="row col-9 mx-2 text-center justify-content-around p-3">

                    <button type="button" className="btn btn-danger m-1 p-1 flex-column col-2 justify-content-center align-items-center shadow" onClick={() => this.Atacar(life1,life2,pokemon2.arAtacks[0].nuAtckPower)}>
                        <h5 className="w-100">{pokemon2.arAtacks[0].stAtckName}</h5><h5>Ataque {pokemon2.arAtacks[0].nuAtckPower} </h5>
                    </button>

                    <button type="button" className="btn btn-danger m-1 p-1 flex-column col-2 justify-content-center align-items-center shadow" onClick={() => this.Atacar(life1,life2,pokemon2.arAtacks[1].nuAtckPower)}>
                        <h5 className="w-100">{pokemon2.arAtacks[1].stAtckName}</h5><h5>Ataque {pokemon2.arAtacks[1].nuAtckPower} </h5>
                    </button>

                    <button type="button" className="btn btn-danger m-1 p-1 flex-column col-2 justify-content-center align-items-center shadow" onClick={() => this.Atacar(life1,life2,pokemon2.arAtacks[2].nuAtckPower)}>
                        <h5 className="w-100">{pokemon2.arAtacks[2].stAtckName}</h5><h5>Ataque {pokemon2.arAtacks[2].nuAtckPower} </h5>
                    </button>

                    <button type="button" className="btn btn-danger m-1 p-1 flex-column col-2 justify-content-center align-items-center shadow" onClick={() => this.Atacar(life1,life2,pokemon2.arAtacks[3].nuAtckPower)}>
                        <h5 className="w-100">{pokemon2.arAtacks[3].stAtckName}</h5><h5>Ataque {pokemon2.arAtacks[3].nuAtckPower} </h5>
                    </button>
               </div>
            </div>
        </div>
            );
        }
    }
}