import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import {Checkout} from '../pages/Checkout';
import {Login} from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import { useContext, useEffect, useState } from 'react';
import {UserContext} from '../context/UserContext';
import Register from '../pages/Register';

function NavigationRoute() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  useEffect(()=>{
    console.log(UserContext);
  }, [UserContext])


    const {
      userContextLogin,
      setTokenContext,
      tokenContext,
      setUserContextLogin
    } = useContext(UserContext);
    return(
        <BrowserRouter>
        <Routes>
          {
            !user ?
            <Route path = '/login' element={<Login
              setToken={setToken}
              setUser={setUser}
              />}></Route>
              :
              <Route path='/checkout' element={<Checkout/>}/>
          }
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/userprofile' element={<UserProfile/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    )
}
export default NavigationRoute;