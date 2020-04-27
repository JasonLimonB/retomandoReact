import React from 'react';

class CardComponent extends React.Component{
   

    state = {
        valor: 0
    }

    sumar = () =>this.setState({valor: this.state.valor + 1});

    restar = ()=> this.setState({valor: this.state.valor - 1});

    render(){
        const codicion = this.state.valor > 7;
        const styles = {
            border: "1px solid transparent",
            borderRadius: '4px',
            padding: "10px",
            width: '250px',
            margin: '10px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.19)',
            color: codicion ? '#ffffff' : '#595959',
            background: codicion ? 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(39,137,224,1) 100%)' : '#ffffff'
        }

        const styleButtons = {
            margin: "4px",
            width: '80px',
            padding: '6px',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            boxShadow : '0px 6px 32px -12px rgba(71,71,71,1)',
            background: '#3483FA',
            cursor: 'pointer',
            outline: 'none'
        }

        return(
            <div style={styles} className="cardContainer">
                <h4>{ this.props.title }</h4>
                <p> $ {this.state.valor}</p>
                
                <button onClick={this.restar} style={styleButtons} >Quitar</button>
                <button onClick={this.sumar}  style={styleButtons}>Agregar</button>
                
            </div>
        );
    }
}

export default CardComponent;