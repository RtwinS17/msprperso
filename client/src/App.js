import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Accueil from './components/Accueil';
import Concerts from './components/Programme';
import Billets from './components/Billetterie';
import Partenaires from './components/Partenaires';
import Infos from './components/Infos';
import FAQ from './components/Faq';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App() {
  return (

   
  < div className="bg-antiFlashWhite">
    <Router>
      <Header />
      
       <Routes>
        <Route path="/" element={<Accueil />} />
       <Route path="/concerts" element={<Concerts />} />
       <Route path="/billets" element={<Billets />} />
       <Route path="/infos" element={<Infos />} />
       <Route path="/partenaires" element={<Partenaires />} />
       <Route path="/faq" element={<FAQ />} />
       <Route path="/contact" element={<ContactForm />} />
      </Routes> 
      <Footer />
    </Router>
   
    </div>
  );
};
    

export default App;

