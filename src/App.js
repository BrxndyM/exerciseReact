import './App.css';
import React from 'react';
import BarChart from './Barchart';
const data = [
  { day: 'Monday', percentage: 50 },
  { day: 'Tuesday', percentage: 25 },
  { day: 'Wednesday', percentage: 75 },
  { day: 'Thursday', percentage: 40 },
  { day: 'Friday', percentage: 80 }
];

function App() {
  return (
    <div className="App">
      <BarChart data={data} />
    </div>
  );
}
export default App;