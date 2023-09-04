import React from "react";

export default class Product extends React.Component {

    constructor(props = {}) {
        super(props)
    }

    formatPrice(price) {
        return "$" + price.toFixed(2)
    }

    render() {
        return (
            <div className="Product">
                <h3 className="ProductTitle">{this.props.product.title}</h3>
                <div className="ProductImage">
                    <img src={this.props.product.image} />
                </div>
                <div className="ProductPrice">{this.formatPrice(this.props.product.price)}</div>
                <div className="ProductButton">
                    <button onClick={ e => this.props.addToCart(this.props.product) }
                     className="AddToCart">Add to cart</button>
                </div>
            </div>
        )
    }
}