
// ler arquivos
const { readFile } = require('fs/promises');
const { join } = require('path')

class File {

  static async csvToJson(filePath) {
      const content = await File.getFileContent(filePath)
    return content
  }

  static async getFileContent(filePath) {
      //normaliza a porta
      const fileName = join(__dirname, filePath)

      return (await readFile(fileName)).toString('utf-8')
  }
}

// funcao main que inicia o codigo

(async () => {
  const result = File.csvToJson('../../mocks/emptyFile-invalid.csv');
  console.log('result', result);
})();
