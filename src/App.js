import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import Navbar from './Shared/Navbar/Navbar';
import NotFound from './Pages/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/RequireAuth';
import Blogs from './Pages/Blogs';
import Purchase from './Pages/Purchase';
import Registration from './Pages/Registration';
import Dashboard from './Pages/Dashboard';
import MyOrders from './Pages/MyOrders';
import MyProfile from './Pages/MyProfile';
import AddReview from './Pages/AddReview';
import Reviews from './Pages/Home/Reviews';
import AllUser from './Pages/AllUser';
import AddTools from './Pages/AddTools';
import ManageAllOrders from './Pages/ManageAllOrders';
import ManageTools from './Pages/Home/ManageTools';
import RequireAdmin from './Pages/RequireAdmin';
import MyPortfolio from './Pages/MyPortfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/addReview' element={<AddReview></AddReview>}></Route>
          <Route path='/dashboard/allUser' element={<RequireAdmin>
            <AllUser></AllUser>
          </RequireAdmin>}></Route>
          <Route path='/dashboard/manageTools' element={<ManageTools></ManageTools>}></Route>
          <Route path='/dashboard/addTools' element={<AddTools></AddTools>}></Route>
          <Route path='/dashboard/manageAllOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
        </Route>
        <Route path='/purchase:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
