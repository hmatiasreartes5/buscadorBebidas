import React,{createContext , useState, useEffect} from 'react';
import axios from 'axios';

//Creo el Context
export const CategoriasContext = createContext()

//Creo el provider donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {

    const[categorias,guardarCategorias] =  useState([]);

    //ejecuto el llamado a la API
    useEffect(()=> {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const resultado = await axios(url);
            guardarCategorias(resultado.data.drinks);
        }
        obtenerCategorias();
    },[])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;