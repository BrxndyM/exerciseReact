import React, { useState } from 'react';
const BarChart = ({ data }) => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const [graphData, setGraphData] = useState(data.map((item) => ({ ...item, percentage: 0 })));
  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };
  const handlePercentageChange = (event) => {
    const newPercentage = parseInt(event.target.value);
    if (newPercentage > selectedPercentage) {
      setSelectedPercentage(newPercentage);
    }
    else {
      alert("cannot have a percentage that has been selected already");
    }
  };
  const handleSaveClick = () => {
    const newData = [...graphData];
    const index = newData.findIndex((item) => item.day === selectedDay);
    newData[index].percentage = selectedPercentage;
    setGraphData(newData);
  };
  const colors = ['blue', 'green', 'grey', 'brown', 'cyan'];
  const barStyle = {
    display: 'inline-block',
    width: '100px',
    margin: '0 5px',
    borderRadius: '5px',
    transition: 'all 0.3s ease-in-out',
  };
  const barContainerStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    height: '500px',
    backgroundColor: '#ADD8E6',
    borderRadius: '5px',
    overflow: 'hidden',
    marginTop: '20px',
  };
  return (
    <div>
      <div style={{}}>
        <label htmlFor="day-select">Select day:</label>
        <select id="day-select" value={selectedDay} onChange={handleDayChange}>
          {data.map((item) => (
            <option key={item.day} value={item.day}>{item.day}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="percentage-select">Select percentage:</label>
        <select id="percentage-select" value={selectedPercentage} onChange={handlePercentageChange}>
          {[...Array(101).keys()].map((value) => (
            <option key={value} value={value}>{value}%</option>
          ))}
        </select>
      </div>
      <button onClick={handleSaveClick}>Save</button>
      <div style={{display: 'flex'}}>
        <div style={barContainerStyle}>
        {graphData.map((item, index) => (
          <div key={item.day}>
            <div style={{...barStyle, height: `${item.percentage}px`, backgroundColor: colors[index]}}>
              <div style={{textAlign: 'center'}}>{item.percentage}%</div>
            </div>
            <div style={{textAlign: 'center'}}>{item.day}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
export default BarChart;