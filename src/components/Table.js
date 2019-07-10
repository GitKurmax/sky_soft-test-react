import React, { Component } from 'react';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRows: [],
      inputValue: '',
      sort: '',
      indexSort: null,
      indexFilter: null,
    }
  }

  componentDidMount() {
    let cellsCounter = 0;
    let rowsNumber = this.props.data.cells.length/this.props.data.columns.length;
    let columns = this.props.data.columns;
    let cells = this.props.data.cells;
    let tds = [];

    for (let i = 0; i < rowsNumber; i++) {
      let row = [] 
      for (let j = 0; j < columns.length; j++) {
        let td = {
          value: cells[cellsCounter].value,
          style: {
            ...cells[cellsCounter].style,
            ...columns[j].style,
          }
        };
        row.push(td);
        cellsCounter++;
      }
      tds.push(row);
    }
    this.setState({
    tableRows: tds,
    });
  }

  sortColumn(elem, index) {
    if (elem.classList.contains('asc')) {
      this.setState({
        sort: 'asc',
        indexSort: index,
      });
    } else {
      this.setState({
        sort: 'desc',
        indexSort: index,
      });
    }
  }

  updateInput(text, index) {
    this.setState({
      inputValue: text,
      indexFilter: index,
    });
  }

  render() {
    let columns = this.props.data.columns;
    let rowsToRender = this.state.tableRows;
    let head = [];
    let rows = [];

    if (this.state.sort === 'asc') {
      this.state.tableRows.sort((a, b) => {
        return a[this.state.indexSort].value - b[this.state.indexSort].value});
    } else if (this.state.sort === 'desc') {
      this.state.tableRows.sort((a, b) => {
        return b[this.state.indexSort].value - a[this.state.indexSort].value});
    }

    if (this.state.inputValue) {
      rowsToRender = this.state.tableRows.filter(row => row[1].value.includes(this.state.inputValue));
    }
 
    for (let i = 0; i < columns.length; i++) {
      let td;
      if (columns[i].sorting) {
        td = <td key={i}>Sort
          <span 
            style={{cursor: 'pointer',
            marginRight: '10px',
            marginLeft: '10px'
            }}
            className = "asc" 
            onClick={(event) => this.sortColumn(event.target, i)
          }>
            &#8679;
          </span>
          <span 
            style={{cursor: 'pointer'}}
            className = "desc" 
            onClick={(event) => this.sortColumn(event.target, i)
          }>&#8681;
          </span></td>;
        head.push(td);
        continue;
      }

      if (columns[i].filtering) {
        td = <td key={i}>
          <input placeholder='filter...' value={this.state.inputValue}
            onChange={(event) => this.updateInput(event.target.value, i)}>
          </input>
        </td>;
        head.push(td);
        continue;
      }
      td = <td key={i}></td>;
      head.push(td);
    }

    for (let i = 0; i < rowsToRender.length; i++) {
      let tds = [];
      for (let j = 0; j <  rowsToRender[i].length; j++) {
        let td = <td key={j} style={rowsToRender[i][j].style}>{ rowsToRender[i][j].value}</td>;
        tds.push(td);
      }
      rows.push(<tr key={i}>{tds}</tr>);
     }
 
    return (
      <table style={{borderCollapse: 'collapse'}}>
        <thead>
          <tr>{head}</tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
