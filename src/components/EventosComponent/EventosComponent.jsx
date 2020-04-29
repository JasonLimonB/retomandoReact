import React from 'react';

class EventosComponent extends React.Component{

    state = {
        texto: ""
    }


    bindText = (event)=>{
        this.setState({texto: event.target.value}) 
    }

    render(){
        const estilos = {
            marginBottom: "50px"
        }

        const inp = {
            width: "200px",
            height: "30px"
        }

        

        return(
            <div style={estilos}>
                <input type="text" style={inp} onChange={this.bindText} />
                <p>{ this.state.texto }</p>
            </div>
        )
    }
}

export default EventosComponent;