import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Main from './Components/Main';
import Navbar from './Components/Nav_bar/Navbar';
import OutlinedCard from './Components/Card';
import RegistrationForm from './Components/RegistrationForm';
import ProfilePage from './Components/ProfilePage';

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
