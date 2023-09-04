import React from 'react'
import CartItem from "./CartItem";

export default class Cart extends React.Component {
    constructor(props = {}) {
        super(props)
    }
    render() {
        const itemComponents = []
        for (let item of this.props.cart.values()) {
            itemComponents.push((
                <CartItem item={item} key={item.id}
                    decreaseItemQuantity={this.props.decreaseItemQuantity}
                    increaseItemQuantity={this.props.increaseItemQuantity}
                />
            ))
        }
        return (
            <div className="Cart"
                style={{ "display": this.props.visible ? "block" : "none" }}>
                {itemComponents}
                <p>Total cost: 0.00</p>
            </div>
        )
    }


}


