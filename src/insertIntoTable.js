function prepareColumn(text) {
  const column = document.createElement('td');
  column.textContent = text;
  return column;
}

function prepareRow(data1, data2) {
  const row = document.createElement('tr');
  
}

function insertIntoTable(table, heading1, heading2, data1, data2, name1, name2) {
  const template = `
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
  `;
  console.log(data1, data2, name1);
}

export default insertIntoTable;