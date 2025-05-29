import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Main from './Components/Main';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
