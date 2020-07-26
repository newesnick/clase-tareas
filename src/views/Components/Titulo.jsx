import React from 'react';

function Titulo ({estado}) {
    return(
        estado ? <h2> Formulario</h2> : <h2 className="text-danger"> Cambios</h2>
    )
}

export default Titulo;