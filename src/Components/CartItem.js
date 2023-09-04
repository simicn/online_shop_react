import React from "react";

export default class CartItem extends React.Component {

    constructor(props = {}) {
        super(props)
    }

    render() {
        return (
            <div className="CartItem">
                <div className="CartItemImage">
                    <img src={this.props.item.image} />
                </div>
                <div className="CartItemTitle">
                    {this.props.item.title}
                </div>
                <div className="CartItemInfo">
                    <button onClick={e => this.props.increaseItemQuantity(this.props.item.id)}>+</button>
                    <input type="number" className="CartItemQuantity"
                    value={this.props.item.quantity}
                    onChange={e=>{}} readOnly />
                    <button onClick={e => this.props.decreaseItemQuantity(this.props.item.id)}>-</button>
                </div>
            </div>
        )
    }
}