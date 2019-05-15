import React, { Component } from 'react';
import { Card, Table, Button } from 'react-bootstrap';

import { connect } from 'react-redux'

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

const mapStateToProps = state => {
  return ({
    cart: state.cart
  });
}


class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

  }

  render() {
    const { cart } = this.props;
    return (
      <Card header="Shopping Cart">
        <Table fill>
          <tbody>
            {cart.map(product =>
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
              Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
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

export default connect(mapStateToProps)(ShoppingCart)