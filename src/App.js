import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Main from './Components/Login_page/Main';
import Navbar from './Components/Nav_bar/Navbar';
import OutlinedCard from './Components/Nav_bar/Card';
import RegistrationForm from './Components/Sign up_page/RegistrationForm';
import ProfilePage from './Components/Profile_page/ProfilePage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/nav' element={<Navbar/>}/>
      <Route path='/card' element={<OutlinedCard/>}/>
      <Route path='/form' element = {<RegistrationForm/>}/>
      <Route path= '/pro' element ={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
