// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<h1>Product List</h1>}/>
      <Route path='/add' element={<h1>Add Product List</h1>}/>
      <Route path='/update' element={<h1>Update Product List</h1>}/>
      <Route path='/logout' element={<h1>Logout</h1>}/>
      <Route path='/profile' element={<h1>Prof</h1>}/>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
