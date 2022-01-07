import Card from './components/card';
import React,{ useState } from 'react';
import './App.css';
import { data } from './data';

function App() {
  const [title,setTitle] = useState('Our tours');
  const [tours,setTours] = useState(data);
  
  return (
    <div className="App">
      <h1>{title}</h1>
      {
        tours.map(tour => {
          const {id} = tour;
          return <Card tour={tour} key={id} setTours={setTours} tours={tours}/>
        })
      }
     
    </div>
  );
}

export default App;
