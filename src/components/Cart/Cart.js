import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const grandTotal = totalPrice.toFixed(2);
    return (
        <div className="fixed-bottom">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title><strong>Total Purchase Course:</strong> <span>$</span>{cart.length}</Card.Title>
                    <Card.Title><strong>Total Amount:</strong> <span>$</span>{grandTotal}</Card.Title>
                    <Button variant="primary">Confirm Purchase</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;
