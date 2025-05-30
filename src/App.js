import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Main from './Components/Main';
import Navbar from './Components/Nav_bar/Navbar';
import OutlinedCard from './Components/Card';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/nav' element={<Navbar/>}/>
      <Route path='/card' element={<OutlinedCard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
