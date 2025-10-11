import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// "Router" servira a stocker et a s'abonner au changemeent de l'URL de la page courante
// "Routes" servira a selectionner le composant enfant correspondant a la location
// "Route" qui prend plusieur param 

import Home from "./pages/Home";
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './components/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          {/* Je met le Header ici pour qu'il fasse partie du layout ainsi visible en haut de toutes les pages */}
          <Header/>
          <Routes>
            {/* "path": contient l'URL qui dirigera vers notre composant 
                "element": va permettre de selectionner le composant enfant a afficher*/}
              <Route path='/' element={<Home />} /> 
              <Route path='/survey/:questionNumber' element={<Survey />} />
              <Route path='/results' element={<Results />} />
              <Route path='/freelances' element={<Freelances />} />
              <Route path='*' element={<Error />} /> {/* path='*' veut dire que si aucune ci-dessus n'est specifier alors diriger vers la page Error 404 */}
          </Routes>
      </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
