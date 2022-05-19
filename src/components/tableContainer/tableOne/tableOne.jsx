import { useState, React } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SearchBarComponent from '../searchBarComponent/searchBarComponent';
import '../tableContainer.css'
import './tableOne.css'

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

const TableOne = (props) => {
  const [rows, setRows] = useState(_rows)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [data, _setData] = useState({})
  // to show FooterSelectedRowCount
  const [show, setShowing] = useState(false)
  const [selectedRows, setSelectedRows] = useState([]);

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
  return (
    <div>

      <SearchBarComponent searchChanged={searchChanged} />

      <div style={{ height: 400, width: '90%' }} className="table-component">
        <DataGrid
          rows={search.length >= 2 ? results : rows}
          columns={props.columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          hideFooterSelectedRowCount={props.show}
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRows = rows.filter((row) =>
              selectedIDs.has(row.id),
            );
            console.log(selectedRows)
            setSelectedRows(selectedRows);
          }}
        // CUSTOM FOOTER:
        // Tried to add custom footer - but it overrides the hideFooterSelectedRowCount 
        //   components={{
        // Footer: CustomFooter,
        // }}
        // componentsProps={{
        //   footer: { results },
        // }}
        />
        <div className="footer">
          <pre style={{ fontSize: 10 }}>

            {JSON.stringify(selectedRows, null, 4)}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default TableOne