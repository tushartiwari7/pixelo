import React from 'react';
import Title from './comps/Title';
import ImageUpload from './comps/ImageUpload.js';
import Album from './comps/Album';
import Dialog from './comps/Dialog';

function App() {
  const [selectedImage,setSelectedImage] = React.useState(null);
  return (
    <div className="App">
      <Title/>
      <ImageUpload />
      <Album setSelectedImage={setSelectedImage} />
      {selectedImage && <Dialog selectedImage={selectedImage} />}
    </div>
  );
}

export default App;
