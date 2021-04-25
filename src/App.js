import React from 'react';
import Title from './comps/Title';
import ImageUpload from './comps/ImageUpload.js';
import Album from './comps/Album';

function App() {
  return (
    <div className="App">
      <Title/>
      <ImageUpload />
      <Album />
    </div>
  );
}

export default App;
