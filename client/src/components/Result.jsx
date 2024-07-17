import { useEffect, useState } from 'react';
import axios from 'axios';
import GanttChart from './GanttChart';

const Result = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8080/api/result');
                setData(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const prepareGanttData = (data) => {
        return data.map(item => {
            const workDone = item.workPerDay * item.numMasons;
            return {
                id: item._id,
                day: new Date(item.startDate).toDateString(),
                workDone: `${workDone} ft`,
                length: item.length,
                width: item.width,
                wallHeight: item.wallHeight,
                numMasons: item.numMasons,
                workPerDay: item.workPerDay,
                startDate: new Date(item.startDate).toLocaleDateString(),
                perimeter: item.perimeter,
                daysRequired: item.daysRequired,
                endDate: new Date(item.endDate).toLocaleDateString(),
            };
        });
    };

    const filteredData = prepareGanttData(data).filter(item => item.length && item.width && item.wallHeight);

    return (
        <div>
            <h2>Results</h2>
            <GanttChart data={filteredData} />
        </div>
    );
};

export default Result;
