import React, { useMemo } from 'react'
import {useTable, useSortBy} from 'react-table'
import { Styles } from './TableStyle'
import Pagination from "../Pagination/Pagination";

const Table = ({result, setOffset}) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Short link',
                accessor: 'short',
                canSort: false
            },
            {
                Header: 'Original link',
                accessor: 'target',
            },
            {
                Header: 'Counter',
                accessor: 'counter',
            },
        ],
        []
    )

    const data = useMemo(() => result, [result])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 2 },
        },
        useSortBy
    )

    return (
        <Styles>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                {column.isSorted
                                    ? column.isSortedDesc
                                        ? ' 🔽'
                                        : ' 🔼'
                                    : ''}
                              </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return  <td {...cell.getCellProps()}>
                                            {
                                                cell.column.id !== 'counter' ?
                                                    <a href={cell.value} rel="noreferrer" target="_blank">{cell.render('Cell')}</a> :
                                                    cell.render('Cell')
                                            }
                                        </td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div>
                <Pagination setOffset={setOffset} data={result} />
            </div>
        </Styles>
    )
}

export default Table