import React, { useEffect, useState } from 'react';
import BackgroundImage from './Components/BackgroundImage/BackgroundImage';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';


function App() {

  return (
    <div>
      <NavBar />
      <MusicTable />
      <BackgroundImage />
      </div>
    )
    
 }
export default App;