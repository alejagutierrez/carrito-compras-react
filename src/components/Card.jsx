import { useState } from "react"
import '../styles/card.css'

export const Card = ({imagen, titulo, descripcion, precio, handleAgregar, handleQuitar, handleDisminuir, handleAumentar}) => {

    const [added, setAdded] = useState(false)

    const ClickAgregar = () =>{
        handleAgregar()
        setAdded(true)
    }
    const ClickQuitar = () =>{
        handleQuitar()
        setAdded(false)
    }

  return (
    <div className="tarjeta">
        <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">{titulo}</h3>
            <p className="tarjeta-descipcion">{descripcion}</p>
            <p className="tarjeta-precio">{precio}</p>

            {
            added 
                ? <button type='button' className="boton-quitar" onClick={ClickQuitar}>Quitar del Carrito</button>
                : <button type='button' className="boton-agregar" onClick={ClickAgregar}>Agregar al Carrito</button>
            }
        </div>
        
    </div>
  )
}
