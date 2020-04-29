import React from 'react';

import Estilos from './estilos.module.css';

class SpreadComponent extends React.Component{

    /* Si trabajamos el estado como hasta ahora lo usamos no mandara un error o bueno no renderizara todo el componentes y por ende el titulo desaparece */

    state = {
        video: {
            titulo: "Soy un video (supuestamente)",
            likes: 0
        }
    }

    addLike = () =>{
        this.setState((prevState) => ({
                video: {
                    ...prevState.video,
                    likes: prevState.video.likes + 1
                }
            }
        ));
    }

    render(){
        return (
            <div className={Estilos.cont}>
                <h3>Usando el método spread en los estados</h3>

                <p>{this.state.video.titulo}</p>
                <p>{ this.state.video.likes }</p>

                <button className={Estilos.btn} onClick={this.addLike}>Likes</button>

            </div>
        )
    }
    
}

export default SpreadComponent;