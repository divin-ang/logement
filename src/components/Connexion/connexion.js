import Menu from '../Menu'
import './connexion.css'
import {Navbar,Button,Form,NavDropdown,FormControl,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Connexion =()=><div>

  <div><Menu/></div>
  <div class="login-form">

  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <p> Vous n'êtes pas encore inscrit? <Link to="/connexion/creer-un-compte">creez un nouveau compte</Link> </p>
</Form>
  </div>
    

</div>
export default Connexion