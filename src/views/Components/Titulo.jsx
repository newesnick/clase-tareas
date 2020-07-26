import React from 'react';

function Titulo ({estado}) {
    return(
        estado ? <h2> Formulario</h2> : <h2 className="text-danger"> Cambio</h2>
    )
}

export default Titulo;