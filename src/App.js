import React, {useState}from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,NavDropdown,Nav,Form,FormControl, Navbar,Alert,Modal, Row} from 'react-bootstrap'
import { MDBInput } from "mdbreact";
import Scrollable from 'hide-scrollbar-react';

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

  function functionTesting(){
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );

    console.log( listItems);
  }

  return (  
    <div style={{backgroundColor:'white',justifyContent:'center',alignContent:'center',overflowY: 'visible',}}>
   
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
      <header className="App-header" style={{backgroundImage: "url(" + "https://w.wallhaven.cc/full/96/wallhaven-9697dk.png" + ")",backgroundSize: 'cover',overflow: 'hidden',}}>
      <Row>
        <div style={{ backgroundColor:'white',alignItems:'center', borderTopLeftRadius:8,borderBottomLeftRadius:8, padding:5, paddingBottom:20,float:'left' ,width:450}}>
          <center>
          <img src={logo} className="App-logo" alt="logo" style={{marginLeft:-20}}/>
          </center>
          <form onSubmit={checking} style={{justifyContent:'center', alignItems:'center', alignContent:'center',alignSelf:'center'}}>
          <div style={{paddingLeft:5}} className="grey-text">
          <MDBInput label="Username" icon="user" onChange={handleChange} />
          <MDBInput label="Password" icon="lock" type="password" onChange={handleChange} />
          </div>
            {/* <input type="text" value={name.value} 
            style={{borderRadius:20,paddingLeft:13}}
            placeholder="Username"
            // onChange={(text) => {setName(text)}}
            onChange={handleChange}
            /> */}
          
            {/* <input type="password" value={name.value} 
            style={{borderRadius:20,paddingLeft:13}}
            placeholder="password"
            // onChange={(text) => {setName(text)}}
            onChange={handleChange}
            /> */}

        </form>
        <center>
        <Button variant="outline-success" style={{padding:13,paddingLeft:'40%',paddingRight:'40%',fontSize:18,marginTop:20}} onClick={()=>{checking()}} >Login</Button>
        {/* <Button variant="outline-success" style={{padding:13,paddingLeft:'40%',paddingRight:'40%',fontSize:18,marginTop:5}} onClick={()=>{functionTesting()}} >Test</Button> */}
        </center>
        
      </div>

      <div style={{background:'white', float:'right',borderTopRightRadius:8,borderBottomRightRadius:8}}>
        <img src={'https://w.wallhaven.cc/full/6k/wallhaven-6kw5z6.jpg'} alt="Logo" style={{width:550,height:580,borderTopRightRadius:8,borderBottomRightRadius:20}}/>
      </div>
      </Row>
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
            <Button onClick={() => setShow(false)} variant="outline-success" style={{borderRadius:10}}>
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
      {/* </ScrollLock> */}
      
    
    </div>

    
  );
}

const styles=({
  container:{
    width: 300,
    height: 100,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -150, /* Half of width */
    marginTop: -50,
  },

  
})

export default App;
