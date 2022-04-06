import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./Product.css";
import { getItemsCart } from "../../utils/itemsCart";
import { updateCart } from "../../store/actions";

export default function Product({
    id,
    nombreProducto,
    imagenProducto,
    precio,
    priceID,
    stock,
}) {
    const [cantidad, setCantidad] = useState(0);
    const dispatch = useDispatch();
    const onClickLess = () => {
        setCantidad(cantidad - 1);
    };
    const onClickMore = () => {
        setCantidad(cantidad + 1);
    };
    const addToCart = () => {
        let items = getItemsCart("items");
        const productToAdd = {
            id: id,
            name: nombreProducto,
            price: precio,
            priceID: priceID,
            quantity: cantidad,
            imagenProducto: imagenProducto,
            stock: stock,
        };
        let restOfItems = items.filter(
            (p) => p.id !== id && p.name !== nombreProducto
        );
        let itemToChange = items.find(
            (p) => p.id == id && p.name == nombreProducto
        );
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
        let arrayToSend = restOfItems.concat(newProductToAdd);

        const itemPP = {
            priceID: newProductToAdd.priceID,
            quantity: newProductToAdd.quantity,
            name: newProductToAdd.name,
        };
        let itemsPP = getItemsCart("stripe");
        localStorage.setItem("stripe", JSON.stringify([...itemsPP, itemPP]));
        localStorage.setItem("items", JSON.stringify(arrayToSend));
        dispatch(updateCart(arrayToSend));
    };

   return (
      <>
         <Card
            style={{ width: "20rem", marginLeft: "auto", marginRight: "auto" }}
         >
            <Card.Img
               variant="top"
               src={imagenProducto}
               style={{ maxHeight: "200px", minHeight: "200px" }}
            />
            <Card.Body>
               <Card.Title>{nombreProducto}</Card.Title>
               <Card.Text>Precio :{precio}</Card.Text>
               <Card.Text>Stock: {stock}!</Card.Text>
               <Link to={`Products/${id}`}>
                  <Button className="me-3" variant="primary">
                     Detalles
                  </Button>
               </Link>
               <Button
                  variant="outline-primary"
                  disabled={cantidad <= 0 ? true : false}
                  onClick={() => onClickLess()}
               >
                  -
               </Button>
               <span className="fw-bolder me-1 ms-1"> {cantidad} </span>
               <Button onClick={() => onClickMore()} variant="outline-primary">
                  +
               </Button>
               <Button
                  disabled={cantidad <= 0 ? true : false}
                  onClick={() => addToCart()}
                  variant="primary"
               >
                  Añadir al carrito
               </Button>
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
    );
}
