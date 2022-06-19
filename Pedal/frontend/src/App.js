import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import createReceipt from './components/createReceipt';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>Pedal Receipts</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />

            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/' href='#home'>
                Receipts
              </Nav.Link>
              <Nav.Link as={Link} to='/createReceipt' href='#link'>
                Create Receipt
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createReceipt' element={<createReceipt />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
