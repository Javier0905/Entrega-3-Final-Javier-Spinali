import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = () => {
    const { carrito} = useContext(CartContext);
    return (
        carrito.map((prod) => (
                
                
        
        <div key={prod.id}>
            <br />
            <h3>{prod.titulo}</h3>
            <p>Precio unit: ${prod.precio}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
            <p>Cant: {prod.cantidad}</p>
            <br />
        </div>
        ))
    )
}

export default CartItem