import React from 'react';

class Ejemplo extends React.Component{

    state = {
        contador: 0
    }

    sumar = () =>this.setState({contador: this.state.contador + 1});

    restar = ()=> this.setState({contador: this.state.contador - 1});

    render(){
        return(
            <div>
                <p> { this.state.contador } </p>
                <button type="button" onClick={this.sumar} >Sumar</button>
                <button type="button" onClick={this.restar}  >Restar</button>
                
            </div>
        );
    }
}


export default Ejemplo;