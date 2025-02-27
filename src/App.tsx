import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

function App() {
  const companyName = "Glx";

  return (
    <>
      <Header companyName={companyName} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Shop' element={<Shop />}/>
      </Routes>
      <Footer companyName={companyName} />
    </>
  );
}

export default App;
