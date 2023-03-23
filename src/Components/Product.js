import React, { Component } from 'react';
import { Card, Col ,Button} from 'react-bootstrap';
import Alert from "react-bootstrap/Alert";


class Product extends Component {
  



    state = {
        likes: this.props.product.like, // initialize the likes state with the likes prop from the product
        count: this.props.product.quantity,
    showAlert: false,
    product_count: this.props.product.quantity,
      };
      handleLike = () => {
        this.setState(prevState => ({
          likes: prevState.likes + 1 // update the likes state by incrementing the previous value by 1
        }), /* () => {
          // callback function to update the likes in the product json data
          const { id, updateLikes } = this.props;
          updateLikes(id, this.state.likes);
        } */);
      }

      HandleQuantity = () => {
        if (this.state.product_count > 0) {
          this.setState((prevState) => ({
            count: prevState.count - 1,
          }));
        }
      };


      ShowAlert = () => {
        this.setState({ showAlert: true });
        this.timeout = setTimeout(() => {
          this.setState({ showAlert: false });
        }, 2000);
      };
  render() {
    const { product } = this.props;
    const { likes } = this.state;
    const { count } = this.state;
   
   

    return (
        <Col md={4}>
           
        <Card className="my-3 p-3 rounded" >
            <div style={{height: '300px' }}>
          <Card.Img  src={require(`../Assets/assets/images/${product.img}`)}  variant="top" />
         </div>
          <Card.Body>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text as="div">{product.description}</Card.Text>
            <Card.Text as="h3">${product.price}</Card.Text>
            <Card.Text as="h5">quantity: {count}</Card.Text>
            <Button variant="primary" onClick={this.handleLike}>
              <i className="bi bi-heart-fill"></i> {likes} likes
            </Button>
           
            <Button
              variant="primary"
              onClick={() => {
                this.HandleQuantity(this.props.product);

                this.props.buy(this.props.product);
                this.ShowAlert();
              }}
              disabled={this.props.product.quantity === 0}
              style={{float:'right'}}
            >
              Buy
            </Button>
    </Card.Body>
    
        </Card>
        {this.state.showAlert && (
              <Alert key="success" variant="success">
                 You bought an Item 
              </Alert>
            )}
      </Col>
    );
  }
}
export default Product;