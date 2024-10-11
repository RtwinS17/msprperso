import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Accueil from './components/Accueil';
import Concerts from './components/Programme';

function App() {
  return (

   
  < div classname="">
    <Router>
      <Header />
       <Routes>
        <Route path="/" element={<Accueil />} />
       <Route path="/concerts" element={<Concerts />} />
      </Routes> 
     
    </Router>
   
    </div>
  );
};
    

export default App;

