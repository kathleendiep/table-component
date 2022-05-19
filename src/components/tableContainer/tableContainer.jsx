import { useState, useEffect, React } from 'react';
import { DataGrid, gridSelectionStateSelector } from '@mui/x-data-grid';
import SearchBarComponent from './searchBarComponent/searchBarComponent';
import SearchAll from './searchAll/searchAll';
import TableOne from './tableOne/tableOne';
import './tableContainer.css'

// CUSTOM FOOTER - this over wrote the FooterSelectedRowCount 
// function CustomFooter(props) {
//   const show = true
//   return (
//      <footer
//      HideFooterSelectedRowCount = {show}
//      />
//   );
// }

const _rows = [
  { id: 1, firstName: 'Jon' },
  { id: 2, firstName: 'Cersei' },
  { id: 3, firstName: 'Jaime' },
  { id: 4, firstName: 'Arya' },
  { id: 5, firstName: 'Arya' },
  { id: 6, firstName: 'Arya' },
  { id: 7, firstName: 'Arya' },
  { id: 8, firstName: 'Arya' },
  { id: 9, firstName: 'Arya' },
];

const TableContainer = () => {
  const [rows, setRows] = useState(_rows)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [data, _setData] = useState({})
  // to show FooterSelectedRowCount
  const [show, setShowing]=useState(false)

  const setData = _data => {
    setRows(Object.values(_data))
    _setData(_data)
  }

  // Search in table
  const searchChanged = (e) => {
    const value = e.target.value
    setSearch(value)
    if (value.length >= 2) {
      const _s = value.toLowerCase()
      setResults(rows.filter(row => {
        for (var i in row) {
          // Only search strings
          if (typeof (row[i]) !== 'string') {
            continue;
          }

          if (row[i].toLowerCase().indexOf(_s) === 0) {
            return true
          }
        }

        return false
      }))
    }
  }
  const columns = [
    { field: 'firstName', headerName: 'First name' },
  ];

  // SEARCH ALL bar (by selecting check button) 
  const [searchAll, setSearchAll] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [checked, setChecked] = useState(false);

  const searchChecked = (e) => {
    const value = e.target.value
    setSearchAll(value)
    if (value.length >= 2) {
      const _s = value.toLowerCase()
      var _rows = search.length >= 2 ? results : rows
      for (var id in data) {
        var row = data[id]
        for (var key in row) {
          if (typeof (row[key]) !== 'string') {
            continue
          }

          if (row[key].indexOf(_s) === 0) {
            data[id].checked = true
            setData(data)
          }
        }
      }
    }
  }

  return (
    <>
      <SearchAll searchChecked={searchChecked} />
      <div className="data">
      <TableOne
        columns={columns}
      />
      </div>
    </>
  );
}

export default TableContainer