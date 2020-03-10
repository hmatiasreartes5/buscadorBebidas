import React,{useContext,useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {

    const [busqueda,guardarBusqueda] = useState({
        nombre : '',
        categoria: ''
    })

    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas,guardarConsultar} = useContext(RecetasContext);

    //Obtener los datos de los campos del formulario
    const obtenerDatos = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return (  
            <form 
            className="col-12"
            onSubmit={e =>{
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
            >
                <fieldset className="text-center">
                    <legend>Busca Bebidas por Categoria o Ingrediente</legend>
                </fieldset>

                <div className="row">
                    <div className="col-md-4">
                        <input 
                            type="text"
                            className="form-control"
                            name="nombre"
                            placeholder="Nombre de la Bebida"
                            onChange={obtenerDatos}
                        />
                    </div>
                    <div className="col-md-4">
                        <select 
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatos}
                        >
                            <option value="">---Selecciona Categoria---</option>
                            {categorias.map(categoria =>(
                                <option key={categoria.strCategory} value={categoria.strCategory}>
                                        {categoria.strCategory}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input 
                            type="submit"
                            className="btn btn-block btn-primary"
                            value="Buscar Recetas"
                        />
                    </div>
                </div>
            </form>
        );
}
 
export default Formulario;