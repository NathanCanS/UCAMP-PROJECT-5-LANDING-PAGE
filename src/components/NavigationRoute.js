import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import { useContext, useEffect, useState } from 'react';
import userContext, { UserContext } from './context/userContext';


function NavigationRoute() {
    const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  useEffect(()=>{
    console.log(userContext);
  }, [userContext])


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
            <Route path = '/checkout' element={<Login
              setToken={setToken}
              setUser={setUser}
              />}></Route>
              :
              <Route path='/chechout' element={<Checkout/>}/>
          }
          <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/userprofile' element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    )
}
export default NavigationRoute;