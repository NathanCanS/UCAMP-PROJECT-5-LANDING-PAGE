//Compunents
import { Link } from 'react-router-dom';
import logo from '../assets/landingpage-logo.png'

//Styles
import { Button, Image, Navbar } from 'react-bootstrap';
import { BagHeart } from 'react-bootstrap-icons';


function Header({isAuth}) {
    return(
        <Navbar bg="dark" data-bs-theme="dark" className='px-lg-3'>
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
                <Button variant='outline-light'>
                    <Link to='/' className="nav-link">Productos</Link>
                </Button>
            </Navbar.Brand>

            if(isAuth){
                <Button variant='primary'>
                <Link to='/userprofile' className="nav-link"/>
                </Button>
            }else{
            <Navbar.Brand>
                <Button variant='primary'>
                    <Link to='/login' className="nav-link">Iniciar sesión</Link>
                </Button>
            </Navbar.Brand>
            }
            <Navbar.Brand>
                <Link to='/checkout' className="nav-link">
                    <Button variant='warning'>
                        <h6><BagHeart className='justify-content-center'/></h6>
                    </Button>
                </Link>
            </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;