import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import {action,orginals,comedy,horror,romance,documentaries} from './urls'
import Banner from './components/NavBar/Banner/Banner';
import RowPost from './components/NavBar/RowPost/RowPost';


function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={comedy} title="Comedy" isSmall/>
      <RowPost url={horror} title="Horror" isSmall/>
      <RowPost url={romance} title="Romance" isSmall/>
      <RowPost url={documentaries} title="Documentaries" isSmall/>
      
    </div>
  );
}

export default App;