//Compunents
import { Link } from 'react-router-dom';
import logo from '../assets/landingpage-logo.png'

//Styles
import { Image, Navbar } from 'react-bootstrap';


function Header() {
    return(
        <Navbar bg="dark" variant='dark' expand="lg" className='px-lg-3'>
            <Navbar.Brand>
                <Link to='/' className="nav-link active" aria-current="page">
                <Image src={logo} fluid rounded width="50"/></Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to='/' className="nav-link active" aria-current="page">
                Papeleria Ucamp</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>

            <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand>
                <Link to='/' className="nav-link">Productos</Link>
            </Navbar.Brand>

            <Navbar.Brand>
                <Link to='/login' className="nav-link">Iniciar sesión</Link>
            </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;