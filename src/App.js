import React from 'react';
import image from './iron-image-small.jpg';
import IronImage from './IronImage/IronImage';
import './App.css';

const hdUrl = 'https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905';

const App = (props) => (
  <div className="app">
    <div className="iron-image-container">
      <IronImage srcPreload={image} srcLoaded={hdUrl} />
    </div>
  </div>
);

export default App;
