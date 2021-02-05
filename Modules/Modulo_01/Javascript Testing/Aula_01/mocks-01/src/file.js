const { readFile } = require('fs/promises');
const { error } = require('./constants')

const defaultOption = {
  maxLines: 3,
  fields: ['id','name','profession', "age"]
}

class File {

  static async csvToJson(filePath) {
      const content = await File.getFileContent(filePath)
      const validation = File.isValid(content)
      if (!validation.valid) throw new Error(validation.error)

      const users = File.parseCSToJson(content)
      return users
  }

  static async getFileContent(filePath) {
      return (await readFile(filePath)).toString('utf-8')
  }

  static isValid(csvString, options = defaultOption) {
    const [header, ...fileWithOutHeader] = csvString.split('\n')

    // console.log('header', header, 'file', fileWithOutHeader);
    const isHeaderValid = header === options.fields.join(',')
        if (!isHeaderValid) {
         return {
              error: error.FILE_FIELDS_ERROR_MESSAGE,
              valid: false,
      }
    }
    const isContentLengthAccept = (
      fileWithOutHeader.length > 0 &&
      fileWithOutHeader.length <= options.maxLines
    )

    if (!isContentLengthAccept) {
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false
      }
      
    }

    return { valid: true }
  }

  static parseCSToJson(csvString) {
    // cria um array
    const lines = csvString.split('\n')
    console.log('LINES', lines);

    // remove o primeiro item e joga na variavel
    const firstLine = lines.shift()
    console.log('Pirmeira linha', firstLine);

    // criar um array e cada pripiedade será uma posição
    const header = firstLine.split(',')
    console.log('Header',header);


    const users = lines.map(line => {
      const columns = line.split(',')
      console.log('colunas dentro do map', columns);
      let user ={}
      for(const index in columns) {
        user[header[index]] = columns[index]
        // console.log( user[header[index]] = columns[index]);
        // console.log('user final', user[index]);
    }

    })
    console.log(users);
      return users

  }

}

// (async () => {
//   // const result = await File.csvToJson('./../mocks/threeeItens-valid.csv');
//   // const result = await File.csvToJson('./../mocks/fuorItens-invalid.csv');
//   const result = await File.csvToJson('./../mocks/invalid-header.csv');
//   console.log('result', result);
// })();


module.exports = File;