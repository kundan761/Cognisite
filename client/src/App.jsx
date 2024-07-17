// src/App.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [wallHeight, setWallHeight] = useState('');
    const [numMasons, setNumMasons] = useState('');
    const [workPerDay, setWorkPerDay] = useState('');
    const [startDate, setStartDate] = useState('');
    const [result, setResult] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8080/api/calculate', {
            length: Number(length),
            width: Number(width),
            wallHeight: Number(wallHeight),
            numMasons: Number(numMasons),
            workPerDay: Number(workPerDay),
            startDate
        });
        setResult(res.data);
        setTimeout(() => {
            navigate('/result');
        }, 1000);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Length:</label>
                    <input type="number" value={length} onChange={(e) => setLength(e.target.value)} required />
                </div>
                <div>
                    <label>Width:</label>
                    <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} required />
                </div>
                <div>
                    <label>Wall Height:</label>
                    <input type="number" value={wallHeight} onChange={(e) => setWallHeight(e.target.value)} required />
                </div>
                <div>
                    <label>Number of Masons:</label>
                    <input type="number" value={numMasons} onChange={(e) => setNumMasons(e.target.value)} required />
                </div>
                <div>
                    <label>Work Done per Day (ft):</label>
                    <input type="number" value={workPerDay} onChange={(e) => setWorkPerDay(e.target.value)} required />
                </div>
                <div>
                    <label>Start Date:</label>
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                </div>
                <button type="submit">Calculate</button>
            </form>
            {result && (
                <div>
                    <h2>Results:</h2>
                    <p>Total Work: {result.perimeter} ft</p>
                    <p>Days Required: {result.daysRequired}</p>
                    <p>End Date: {result.endDate}</p>
                </div>
            )}
        </div>
    );
}

export default App;
