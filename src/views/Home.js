import React, { useState } from 'react';
import swal from 'sweetalert';
import Titulo from './Components/Titulo';
import Itemlist from './Components/Itemlist';







const Home = props => {

    const [contador, setContador] = useState(1)/* Cuenta cuantas veces se apreta "agregar"--> Id */
    const [nombre, setNombre] = useState("")/* Almacena nombres puesto en formulario */
    const [descripcion, setDescripcion] = useState("")/* almacena descripcion puesta en formulario */
    const [datos, setDatos] = useState([])/* almacena array de objetos */


    const [estado, setEstado] = useState(true)/* el estado de la pagina: false--> entra en edición */
    const [indice, setIndice] = useState(-1)/* guarda el id del dato que se quiere cambiar */


    const agregartarea = (e) => {
        e.preventDefault()
        if (nombre === "" || descripcion === "") { swal("Cuidado", "Todos los campos son obligatorios", "warning") && setNombre("") && setDescripcion("") }
        else {
            setDatos([
                ...datos,
                { id: contador, nombr: nombre, desc: descripcion }]
            )
            setContador(contador + 1)
            swal("Buen trabajo", "Los datos se agregaron correctamente", "success")

            setNombre("")
            setDescripcion("")
        }
    }

    const borrartarea = (datoactual) => {
        const copiadatos = datos
        const newdatos = copiadatos.filter(datos => datos !== datoactual)
        setDatos(newdatos)
        swal("Atención", "los datos borrados no pueden ser recuperados", "info")
    }

    const cambiartarea = (e) => {
        e.preventDefault()
        if (nombre === "" || descripcion === "") { swal("Cuidado", "Todos los campos son obligatorios", "warning") && setNombre("") && setDescripcion("") }
        else {
            datos[indice].nombr = nombre
            datos[indice].desc = descripcion
            swal("Buen trabajo", "Los datos se editaron correctamente", "success")
            setNombre("")
            setDescripcion("")
            setEstado(true)
        }
    }

    return (
        <>
            <div class="container mt-5">
                <div class="row">

                    <div class="col-4">{/* formulario */}

                        <form onSubmit={(e) => { estado ? agregartarea(e) : cambiartarea(e) }}>

                            <Titulo estado={estado} />
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1 ">Usuario</label>
                                <input type="text" value={nombre} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre usuario" onChange={(e) => {
                                    setNombre(e.target.value)
                                }} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword    1">Descripción</label>
                                <input type="text" value={descripcion} nombre={descripcion} className="form-control" id="exampleInputPassword1" placeholder="Detalles" onChange={(e) => {
                                    setDescripcion(e.target.value)
                                }} />
                            </div>

                            {estado ? <button type="submit" className="btn btn-primary botons">Agregar</button> :
                                <button type="submit" className="btn btn-success botons">Cambiar</button>}

                        </form>


                    </div>
                    <div class="col-8">{/* Tabla */}

                        <table className="table">
                            <thead className="thead-info">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {estado ? datos.map((item, i) =>
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.nombr}</td>
                                        <td>{item.desc}</td>
                                        <td >
                                            <i className="fas fa-pencil-alt  text text-success mx-3"
                                                onClick={() => { setEstado(false); setIndice(i) }} />

                                            <i className="fas fa-trash-alt text text-danger  "
                                                onClick={() => { borrartarea(item) }} /></td>
                                    </tr>) :
                                    datos.map((item, i) =>
                                        <tr className={`${i === indice ? "bg-success font-weight-bold" : "text-secondary"}`}>


                                            {/*   <th scope="row">{item.id}</th>
                                            <td>{item.nombr}</td>
                                            <td>{item.desc}</td>
                                            <td></td> */}
                                            <Itemlist item={item} />
                                        </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;