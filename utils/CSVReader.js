const parse = require('csv-parse')
const fs = require('fs');

class CSVReader{
    constructor(path, model){
        this.path = path;
        this.model = model;
    }

    parse(){
        let output = [];
        let size = 0;
        return new Promise(
            (resolve, reject) => {
                const stream = fs.createReadStream(this.path)
                if(stream == null || stream == undefined){
                    reject("File cannot be opened")
                }
                stream.pipe(parse({
                    columns: true,
                    delimiter: ',',
                    trim: true,
                    skip_empty_lines: true
                })
                .on('data', (row) => {   
                    output.push(this.model.Create(row));
                    size++
                } )
                .on('end', () => {
                    resolve({output, size})
                }));
            }
        )
    }
}

module.exports = CSVReader