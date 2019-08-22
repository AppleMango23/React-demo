import React, {useState}from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,NavDropdown,Nav,Form,FormControl, Navbar,Alert,Modal} from 'react-bootstrap'

function App() {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  
  function handleChange(event){
    setName(event.target.value);
    console.log(name);
  }
  function checking(){
    if(name === "testing"){
      console.log(name, ' is correct password ')
      setShow(true);
    }
    else{
      setShowError(true);
    }
    
  }
  function AlertOpen() {
    setShow(true)
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
            <NavDropdown.Item  >Action</NavDropdown.Item>
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
        <center>
        <form onSubmit={checking} style={{justifyContent:'center', alignItems:'center', alignContent:'center',alignSelf:'center'}}>
        <label>
          <input type="text" value={name.value} 
          style={{borderRadius:20,paddingLeft:13}}
          placeholder="Username"
          // onChange={(text) => {setName(text)}}
          onChange={handleChange}
          />
          
        </label>
        <label>
          <input type="password" value={name.value} 
          style={{borderRadius:20,paddingLeft:13}}
          placeholder="password"
          // onChange={(text) => {setName(text)}}
          onChange={handleChange}
          />
          
        </label>
        
        
      </form>
      </center>
      <button onClick={()=>{checking()}}>Log in</button>
      </header>
      
      <Modal
        aria-labelledby="modal-label"
        show={show}          
        >
          <Alert show={show} variant="success" style={{marginBottom:0}} >
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Today is a good day please be prepare and fight the bad monster
          </p>
          
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me ya'll!
            </Button>
          </div>
        </Alert>
      </Modal>

      <Modal
        aria-labelledby="modal-label"
        show={showError}          
        >
          <Alert show={showError} variant="success" style={{marginBottom:0,backgroundColor:'pink',borderColor:'pink'}} >
          <Alert.Heading style={{color:'black'}}>Error!</Alert.Heading>
          <p style={{color:'black'}}>
            Please rewrite the username i suspect u are not the user..
          </p>
          
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowError(false)} variant="outline-success" style={{borderColor:'black',backgroundColor:'pink'}}>
              <p style={{color:'black'}}>Close me ya'll!</p>
            </Button>
          </div>
        </Alert>
      </Modal>
      
    </div>
  );
}

export default App;
