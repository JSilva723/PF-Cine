import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import "./Product.css";
import { getItemsCart } from "../../utils/itemsCart";
import { updateCart } from "../../store/actions"


export default function Product({ id, nombreProducto, imagenProducto, precio, priceID, stock }) {

    const [cantidad, setCantidad] = useState(0);
    const dispatch = useDispatch();
    const onClickLess = () => {
        setCantidad(cantidad - 1)
    }
    const onClickMore = () => {
        setCantidad(cantidad + 1)
    }
    const addToCart = () => {
        let items = getItemsCart()
        const productToAdd = {
            id: id,
            name: nombreProducto,
            price: precio,
            priceID: priceID,
            quantity: cantidad,
            imagenProducto: imagenProducto,
            stock: stock,
        }
        let restOfItems = items.filter(p => p.id !== id && p.name !== nombreProducto)
        let itemToChange = items.find(p => p.id == id && p.name == nombreProducto)
        let newProductToAdd = itemToChange
            ? {
                id: id,
                name: nombreProducto,
                price: precio,
                priceID: priceID,
                quantity: cantidad + itemToChange.quantity,
                imagenProducto: imagenProducto,
                stock: stock,
            }
            : productToAdd;
        let arrayToSend = restOfItems.concat(newProductToAdd)
        
        localStorage.setItem("items", JSON.stringify(arrayToSend))
        dispatch(updateCart(arrayToSend))
    }

    return (
        <>

            <Card
                style={{ width: "20rem", marginLeft: "auto", marginRight: "auto" }}
            >
                <Card.Img
                    variant="top"
                    src={imagenProducto}
                    style={{ maxHeight: "50px" }}
                />
                <Card.Body>
                    <Card.Title>{nombreProducto}</Card.Title>
                    <Card.Text>
                        Precio :{precio}
                    </Card.Text>
                    <Card.Text>Stock: {stock}!</Card.Text>
                    <Link to={`Products/${id}`}>
                        <Button className="me-3" variant="primary">
                            Details
                        </Button>
                    </Link>
                    <button disabled={cantidad <= 0 ? true : false} onClick={() => onClickLess()}>-</button>
                    <span>{" "}{cantidad}{" "}</span>
                    <button onClick={() => onClickMore()}>+</button>
                    <Button onClick={() => addToCart()} variant="primary">add to cart</Button>

                </Card.Body>
                {/* <Card.ImgOverlay>
                    <Card.Title>{nombreProducto}</Card.Title>
                    <Card.Text>
                        Precio :{precio}
                    </Card.Text>
                    <Card.Text>Stock: {stock}!</Card.Text>
                </Card.ImgOverlay> */}
            </Card>


        </>
    )
}