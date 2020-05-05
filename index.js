const xlsxFile = require('read-excel-file/node');

function readFile(){
    xlsxFile('./Sample_data.xlsx').then((rows) => {
     console.table(rows)
    
    })
}

readFile()
 
