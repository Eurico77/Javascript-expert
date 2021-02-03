const File = require('./src/file')
const { error} = require('./src/constants')
const { rejects } = require('assert')
const path = require('./src/utils/paths')


;
(async () => {
  
    const filePath = path
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath.invalid)
    await rejects(result, rejection)

  })();
  