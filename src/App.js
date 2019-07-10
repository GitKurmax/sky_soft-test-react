import React from 'react';
import Table from './components/Table';
import { data } from './data/data.js';

function App() {
  return (
    <Table data={data}/>
  );
}

export default App;
