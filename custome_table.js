class TableGenerate extends HTMLElement {
  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
    this.table = document.createElement('table');
    this.styleElement = document.createElement('style');
    this.styleElement.textContent = `
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }

      th, td {
        padding: 10px;
        text-align: left;
      }

      th {
        background-color: #f4f4f4;
      }

      td, th {
        border: 1px solid #ddd;
      }

      table.no-border td, table.no-border th {
        border: none;
      }
    `;
    this.shadowRoot.appendChild(this.styleElement);
    this.shadowRoot.appendChild(this.table);
  }

  static get observedAttributes() {
    return ['border', 'colo'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'border') {
      if (newValue === 'true') {
        this.table.classList.remove('no-border');
      } else {
        this.table.classList.add('no-border');
      }
    }
    if(name == 'colo')
    {
      if (newValue === 'true'){
        this.color_flag = true;
      }
      else{
        this.color_flag = false;
      }
    }
    
  }

  addRow(data = []) {
    const row = document.createElement('tr');
    data.forEach((cellData) => {
      const cell = document.createElement('td');
      cell.textContent = cellData;
      row.appendChild(cell);
    });
    this.table.appendChild(row);
    if(this.color_flag)
      this.addColor();
  }

  addColor(){
    let arr = this.table.childNodes;
    // console.log(arr.childNodes)
    for(let i = 1; i < arr.length; ++i)
    {
      if(i % 2 == 0)
      {
        //console.log(arr[i].style)
        arr[i].style.backgroundColor = "gray";
      }
    }
  }

  setHeader(headers = []) {
    flag = false;
    const headerRow = document.createElement('tr');
    headers.forEach((headerText) => {
      const header = document.createElement('th');
      header.textContent = headerText;
      headerRow.appendChild(header);
    });
    this.table.appendChild(headerRow);
  }
}

customElements.define('table-generate', TableGenerate);
let flag = true;
const table = document.querySelector('table-generate');
const rows = document.getElementById("row-data");
// Function to add a sample row
let col_size = 0;
function addSampleRow() {
  if(flag)
  {
    const cols = document.getElementById('colum-name').value; 
    document.getElementById('colum-name').readOnly = true;
    let d = cols.split(',')
    col_size = d.length;
    table.setHeader(d)
  }
  let data = rows.value;
  data = data.split(',')
  if(data.length != col_size)
  {
    let rem = col_size - data.length;
    if(rem < 0)
    {
      for(let i = rem; i < 0; ++i)
        data.pop();
    }
    else 
    {
      for(let i = 0; i < rem; ++i)
        data.push('null')
    }
  }
  table.addRow(data);
}