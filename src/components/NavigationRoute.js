import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import UserProfile from '../pages/UserProfile';


function NavigationRoute() {
    return(
        <Routes>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/userprofile' element={<UserProfile/>}/>
        </Routes>
    )
}
export default NavigationRoute;