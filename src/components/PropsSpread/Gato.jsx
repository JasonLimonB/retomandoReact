import React from 'react';

const Gato = (props) =>{

    const cat = "🐈";
    return (
        <div>
            <h1>Gato {cat}</h1>
            <pre>
                { JSON.stringify(props, null, 4) }
            </pre>
        </div>
    )
}

export default Gato;


/*
Pensemos que este componente lo llamamo en el componente App

y pasamos por props lo siguiente

<Gato name="Pumba" edad="5 años" />
se mostrará
{
    "name": "Pumba",
    "edad": "5 años",
}

Pero en nuestro componentes queremos poner un objeto mas
const datosAdicionales = {
    raza: persona,
    peleas: 200
}

<Gato name="Pumba" edad="5años" masDatos={datosAdicionales} />

{
    "name": "Pumba",
    "edad": "5 años",
    masDatos: {
        raza: persona,
        peleas: 200
    },
}

Entonces en el caso de querer tener todo a un solo nivel usamos spread

<Gato name="Pumba" edad="5 años" {...datosAdicionales} />

{
    "name": "Pumba",
    "edad": "5 años",
    "raza": "persona",
    "peleas": "200"
}
Ahora todos estan aun solo nivel
pero recordemos que si tenemos otra propiedad con el mismo nombre, esta tomará el ultimo valor asignado

name: Otro gato -> dentro de nuestro objeto masDatos quedaria asi

{
    "name": "Otro gato",
    "edad": "5 años",
    "raza": "persona",
    "peleas": "200"
}

*/