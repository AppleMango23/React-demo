import React, {useState}from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,NavDropdown,Nav,Form,FormControl, Navbar } from 'react-bootstrap'

function App() {
  const [name, setName] = useState('');

  function handleChange(event){
    setName(event.target.value);
    console.log(name);
    

  }
  function checking(){
    if(name === "testing"){
      console.log(name, ' is correct password ')
    }
    console.log(name);
    alert(name)
  }

  

  return (
    
    <div style={{backgroundColor:'white'}}>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cool<br></br>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={checking}>
        <label>
          XXX:
          <input type="text" value={name.value} 
          // onChange={(text) => {setName(text)}}
          onChange={handleChange}
          />
          
        </label>
        
        
      </form>
      <button onClick={()=>{checking()}}>Press me</button>
        <a
          className="App-link"
          href="/Screen/home.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/Screen/home.js" className="App-link">hello</Link>
      </header>
    </div>
  );
}

export default App;
