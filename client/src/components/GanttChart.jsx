/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';
import '../Styles/GanttChart.css';

const GanttChart = ({ data }) => {
    const columns = React.useMemo(
        () => [
            { Header: 'Length', accessor: 'length' },
            { Header: 'Width', accessor: 'width' },
            { Header: 'Wall Height', accessor: 'wallHeight' },
            { Header: 'Number of Masons', accessor: 'numMasons' },
            { Header: 'Work Per Day (ft)', accessor: 'workPerDay' },
            { Header: 'Total Work Done', accessor: 'workDone' },
            { Header: 'Perimeter', accessor: 'perimeter' },
            { Header: 'Start Date', accessor: 'startDate' },
            { Header: 'Days Required', accessor: 'daysRequired' },
            { Header: 'End Date', accessor: 'endDate' },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div className="gantt-chart">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} key={column.id}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, index) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={row.original.id}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} key={cell.column.id}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

GanttChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            length: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired,
            wallHeight: PropTypes.number.isRequired,
            numMasons: PropTypes.number.isRequired,
            workPerDay: PropTypes.number.isRequired,
            workDone: PropTypes.string.isRequired,
            perimeter: PropTypes.number.isRequired,
            startDate: PropTypes.string.isRequired,
            daysRequired: PropTypes.number.isRequired,
            endDate: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default GanttChart;
