import { useState, React } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './tableContainer.css'
import SearchBarComponent from './searchBarComponent/searchBarComponent';
import SearchAll from './searchAll/searchAll';
// function CustomFooter(props) {
//   const show = true
//   return (
//      <footer
//      HideFooterSelectedRowCount = {show}
//      />
//   );
// }
const TableContainer = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const columns = [
    { field: 'firstName', headerName: 'First name', width: 160 },
  ];

  const rows = [
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

  return (
    <>
      <SearchAll/>
      <div className="data">
        <SearchBarComponent searchChanged={searchChanged} />
        <div style={{ height: 400, width: '100%' }} >
          <DataGrid
            rows={search.length >= 2 ? results : rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
          // components={{
          //   Footer: CustomFooter,
          // }}
          // componentsProps={{
          //   footer: { background: 'red' },
          // }}
          />
        </div>
        <footer>
            <span> info goes here</span>
          </footer>
      </div>
    </>
  );
}

export default TableContainer