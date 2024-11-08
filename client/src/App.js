import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Components/Landing/Landing"
import Home from "./Components/Home/Home"
import Search from "./Components/Search/Search"
import Shop from "./Components/Shop/Shop"
import Login from "./Components/Login/Login"
import NavBar from "./Components/NavBar/NavBar"
import Detail from "./Components/Detail/Detail"
import Form from "./Components/Form/Form"
import NotFound from "./Components/NotFound/NotFound"
import SignUp from "./Components/SignUp/SignUp"
import UserDashboard from "./Components/UserDashboard/UserDashboard"
import AdminDashboard from "./Components/Admin/AdminDashboard/AdminDashboard"
import Checkout from "./Components/Checkout/Checkout";
import OrderDetail from "./Components/OrderDetail/OrderDetail";
import { useEffect } from "react";
import 'typeface-montserrat';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "./Redux/Actions";
import sneakers from "./mockDB/mockDB";
import 'primereact/resources/themes/saga-blue/theme.css';  // O cualquier otro tema que prefieras



function App() {
 
  const dispatch = useDispatch()
  const loggedUserData = useSelector(state => state.loggedUserData)
  let location = useLocation()

  // const checkSession = () => {
  //   const sessionDuration = 5000
  //   const loginTime = localStorage.getItem('loginTime');
  //   if (loginTime) {
  //       const currentTime = new Date().getTime();
  //       console.log(currentTime)
  //       console.log(loginTime)
  //       console.log(currentTime-loginTime)
  //       if (currentTime - loginTime > sessionDuration) {
  //           localStorage.removeItem('loginTime')
  //           dispatch(logoutUser)
  //       } else {
  //           // Actualizar la hora de inicio de sesión si aún es válida
  //           localStorage.setItem('loginTime', currentTime);
  //       }
  //   }
  // };

  // useEffect(() => {
  //   checkSession()
  // }, [])

  return (
    <div>
      {location.pathname !== "/" && <NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/detail/:ID' element={<Detail/>}/>
        <Route path='/orderdetail/:id' element={<OrderDetail/>}/>
        <Route path='/form' element={<Form/>}/>
        {
          !loggedUserData.isAdmin && <Route path='/shop' element={<Shop/>}/>
        }
        {
          !loggedUserData.isAdmin && <Route path='/checkout' element={<Checkout/>}/>
        }
        {
          !loggedUserData.username && <Route path='/login' element={<Login/>}/>
        }
        {
          !loggedUserData.username && <Route path='/signup' element={<SignUp/>}/>
        }
        {
          loggedUserData.username && !loggedUserData.isAdmin && <Route path='/dashboard' element={<UserDashboard/>}/>
        }
        {
          loggedUserData.isAdmin && <Route path='/dashboard' element={<AdminDashboard/>}/>
        }
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
