import { useState, useEffect } from "react"
//Importamos los hooks que vamos a utilizar. 

//Importar las funciones de Firebase que necesitamos para mostrar los productos: 

import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore"
//getDocs me permite obtener los documentos de una colección. 
//collection me permite obtener una colección. 
//query la uso cuando quiero generar una consulta. 
//where la uso para agregar filtros a mis consultas

import { db } from "../../services/config";

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect( ()=> {
        // const misProductos = query(collection(db, "productos"));

        //Si quisiera filtrar puedo usar where: 
        const misProductos = query(collection(db, "productos"),where("precio", "<", 1500));

        getDocs(misProductos)
            .then( res => {
                setProductos(res.docs.map(doc=> ({id:doc.id, ...doc.data()})))
                //Creo un nuevo array que contenga los datos del producto y además el id. 
            })
    }, [productos])
    //Obtengo los datos cuando se monta el componente. 

    //MODIFICACIÓN: Quiero descontar stock cada vez que hago click en comprar. 

    const descontarStock = async (producto) => {
        const productoRef = doc(db, "productos", producto.id);
        const nuevoStock = producto.stock - 1; 

        await updateDoc(productoRef, {stock:nuevoStock});

    }


  return (
    <>
        <h2>Mis Productos</h2>

        <div>
            {
                productos.map(producto => (
                    <div key={producto.id}>
                        <h3> {producto.nombre} </h3>
                        <p> Precio: {producto.precio} </p>
                        <p> Stock: {producto.stock} </p>
                        <button onClick={()=> descontarStock(producto)}> Comprar </button>
                    </div>
                ))
            }
        </div>
    
    </>
  )
}

export default Productos