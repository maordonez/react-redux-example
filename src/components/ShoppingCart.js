import React, { Component } from 'react';
import { Card, Table, Button } from 'react-bootstrap';

import store from '../store'

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      console.log(store.getState().cart)
      this.setState = {
        cart : store.getState().cart
      }
    })
  }

  render() {
    return (
      <Card header="Shopping Cart">
        <Table fill>
          <tbody>
            {this.state.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCart(product)}></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Card>
    )
  }

  removeFromCart(product) {

  }
}

export default ShoppingCart;