export const data = {
  columns: [{ 
    type: 'number',
    filtering: false,
    sorting: true, 
    style: {
      color: 'green',
      width: '100px',
      textAlign: 'center',
    },
  },
  { 
    type: 'string',
    filtering: true,
    sorting: false, 
    style: {
      color: 'red',
      width: '100px',
      padding: '10px',
    },
  },
  { 
    type: 'string',
    filtering: false,
    sorting: false, 
    style: {
      color: 'blue',
      width: '100px',
      padding: '10px',
    },
  },
],
  cells: [
    {
      value: 1,
      style: {backgroundColor: 'lightgrey'}, 
    },
    {
      value: 'a',
      style: {
        borderLeft: '1px solid grey',
        borderRight: '1px solid grey',
        backgroundColor: 'lightgrey'
      } 
    },
    {
      value: 's',
      style: {backgroundColor: 'lightgrey'},  
    },
    {
      value: 2,
      style: {backgroundColor: 'lightblue'},  
    },
    {
      value: 'atz',
      style: {
        backgroundColor: 'lightblue',
        borderLeft: '1px solid grey',
        borderRight: '1px solid grey'
      }  
    },  
    {
      value: 'x',
      style: {backgroundColor: 'lightblue'},   
    },  
    {
      value: 3,
      style: {backgroundColor: 'lightpink'},   
    },
    {
      value: 'atd',
      style: {
        borderLeft: '1px solid grey',
        borderRight: '1px solid grey',
        backgroundColor: 'lightpink'
      }  
    },
    {
      value: 'b',
      style: {backgroundColor: 'lightpink'},  
    }
  ]
}
