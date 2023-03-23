import './App.css';
import Products from './Components/Products.js';
import { Container, Row} from 'react-bootstrap';

function App() {
  return (
    <Container>
    <h1 className="text-center my-4">Our Products</h1>
    <Row>
    <Products/>
    </Row>
  </Container>
  
  );
}

export default App;
