import Product from './Product';

import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import productsData from '../Assets/products.json';
import Alert from "react-bootstrap/Alert";

class Products extends Component {
    state = {
        listproducts: productsData,
        available: true,
        welcome_msg: false,
      };
      Buy = (prod) => {
        if (prod.quantity === 0) {
          this.setState({ available: false });
          //   else if(prod.quantity>0){
          //     this.setState((prevState)=>({
          //      product_count:prevState.product_count-1
          //     }));
        }}
        HandleQuantity = (prod) => {
            if (prod.quantity > 0) {
              this.setState((prevState) => ({
                product_count: prevState.product_count - 1,
              }));
            }
          };
          componentDidMount() {
            this.timer = setTimeout(() => {
              this.setState({ welcome_msg: true });
            }, 3000);
          }
          componentWillUnmount() {
            clearTimeout(this.timer);
          }

    render() {
        return (
            <div>
                  {this.state.welcome_msg && (
          <Alert variant="success">
            <Alert.Heading>
              Hey Welcome To Our Shop <b>Mouhib Gaming</b>
            </Alert.Heading>
            <p>
              Thank you for choosing our store, we hope you enjoy your shopping
              experience !
            </p>
            <hr />
          </Alert>
        )}
          <Container>
            
            <h1 className="py-3">Enjoy our finest collection!</h1>
            <Row>
            {this.state.listproducts.map((prod, index) => (
            
            <Product product={prod} buy={this.Buy} />
         
        ))}
            </Row>

           
            
          </Container></div>
        );
      }
    }
    
    export default Products;
  
  
  
  
  