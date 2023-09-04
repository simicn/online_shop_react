import React from "react";
import Product from "./Components/Product";
import storeLogo from "./images/logo.webp"
import Cart from "./Components/Cart";

export default class App extends React.Component {

  constructor(props = []) {
    super(props);
    this.state = {
      "products": [],
      "cart": new Map(),
      "visible": false
    }
    this.loadProduct()
    this.addToCart = this.addToCart.bind(this)
    this.itemsInCart = this.itemsInCart.bind(this)
    this.toggleCart = this.toggleCart.bind(this)
    this.decreaseItemQuantity = this.decreaseItemQuantity.bind(this)
    this.increaseItemQuantity = this.increaseItemQuantity.bind(this)


  }
  toggleCart() {
    this.setState({ "visible": !this.state.visible })
  }
  addToCart(product) {
    const cart = this.state.cart
    if (cart.has(product.id)) {
      cart.get(product.id).quantity++
    }
    else {
      cart.set(product.id, {
        "id": product.id,
        "title": product.title,
        "image": product.image,
        "price": product.price,
        "quantity": 1
      })
    }
    this.setState({ "cart": cart })
  }
  itemsInCart() {
    const items = this.state.cart.values()
    let total = 0
    for (let item of items) {
      total += item.quantity
    }
    return total
  }

  decreaseItemQuantity(item_id) {
    const cart = this.state.cart
    const item = cart.get(item_id)
    item.quantity--
    if (item.quantity == 0) {
      cart.delete(item_id)
      this.setState({ "cart": cart })
      return
    }
    cart.set(item_id, item)
    this.setState({ "cart": cart })
  }
  increaseItemQuantity(item_id) {
    const cart = this.state.cart
    const item = cart.get(item_id)
    item.quantity++

    cart.set(item_id, item)
    this.setState({ "cart": cart })
  }

  loadProduct() {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        response.json().then(data => {
          this.setState({ "products": data })

        })
      })
  }



  render() {
    const productComponent = []
    for (let product of this.state.products) {
      productComponent.push((
        <Product product={product} key={product.id}
          addToCart={this.addToCart} />
      ))
    }
    return (

      <div className="EerythingStore">
        <header className="StoreHeader">
          <div className="StoreLogo">
            <img src={storeLogo} />
          </div>
        </header>
        <nav className="StoreNav">
          <div className="NavLink"><a href="#">Home</a></div>
          <div className="NavLink"><a href="#">About</a></div>
          <div className="NavLink"><a href="#">Products</a></div>
          <div className="NavSeparator"></div>
          <div className="CartSection">
            <button onClick={this.toggleCart}>Cart ({this.itemsInCart()})</button>
            <Cart visible={this.state.visible} cart={this.state.cart}
              decreaseItemQuantity={this.decreaseItemQuantity}
              increaseItemQuantity={this.increaseItemQuantity}
            />
          </div>

        </nav>

        <div className="Products">
          {productComponent}
        </div>
      </div>
    )
  }
}
