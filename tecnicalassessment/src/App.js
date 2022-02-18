import './App.css';
import Home from './Home'
import Create from './Create';
import PageNotFound from './PageNotFound'
import Event from './Event'
import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      
    </>
  );
}

export default App;
