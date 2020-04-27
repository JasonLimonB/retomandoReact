import React from 'react';
// import './AddStyles.css';
/* Tambien podemos importar nuestros estilos por medio de modulo de webpack, que para ello debemos mdificar el nombre del archivo nombre.module.css */
import masEstilos from './AddStyles.module.css';
class AddStyles extends React.Component{


    render(){
        /* Para poder tener un poco de logica y ver que clase poner o quitar podemos hacer lo siguiente para solo inyectarlo en el className*/
        /*const clases = 'Container';*/
        /* Ahora si tenemos que hacer un poco mas dinamico el estilo por ejemplo del componente Ejemplo que cambia de color podemos hacer lo siguiente */
        /*const condicion = "condicion" > 0 ;*/
        /* solo lo agregamos a nuestra clase  ->  const clases = condicion ? claseA : claseB; */

        return (
            <div>

                <h3>Importando estilos de un archivo css</h3>
                <div className={masEstilos['cont-cont']}>
                    <p>En este div se agregaran estilos desde un archivo css</p>
                    <button className={masEstilos.boton} onClick={ () => {alert("Hola mundo con estilos separado en un archivo CSS")} }>Boton para estilos</button>
                </div>
            </div>
        )
    }
}

export default AddStyles;