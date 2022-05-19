import logo from './logo.svg';
import './App.css';
import React from 'react';
import TableContainer from './components/tableContainer/tableContainer'; 
import Header from './components/header/header';
import TableContainerFixed from './components/tableContainer/tableContainerFixed';

function App() {
  return (
    <>
    <Header/>
    <TableContainer/>
    </>
  );
}

export default App;
