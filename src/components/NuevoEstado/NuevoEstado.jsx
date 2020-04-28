import React from 'react';

import Estilos from './estilos.module.css';

class NuevoEstado extends React.Component{

    state = {
        numero:  0
    }

 /* Esta es una forma de modificar el estado siempre y cuando no se tengan que ver afectadas las props o fueron afectadas, para que solo se afecte el state pasamos al state un funcion */
    /* sumar = ()=>(this.setState({numero: this.state.numero + 1})); */

    sumar = ()=>{

        /* La funcion que se pasa por parametro en el setSatate debe retornar el nuevo valor del state */

        this.setState((prevState, props)=>{
            
            /* Aqui si retornamos el state como null el estado ya no sera modificado */
            if(prevState.numero === 9){
                return null
            }

            return {
                numero: prevState.numero + 1
            }
        });
    }

    render(){

        return(
            <div className={Estilos.contEstados}>
                <div className={Estilos.c}>
                    <h1>Nuevo manejo de estados</h1> <br />
                </div>
                <div className={Estilos.c}>
                    <div className={Estilos.otro}>
                        <p className={Estilos.parrafo}>{this.state.numero}</p>
                        <button className={Estilos.btn} onClick={this.sumar} >{ this.props.titleButton }</button>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default NuevoEstado;