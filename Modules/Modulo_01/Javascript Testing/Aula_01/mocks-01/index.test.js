const File = require('./src/file')
const { error } = require('./src/constants')
const { rejects, deepStrictEqual } = require('assert')
const path = require('./src/utils/paths')


;
(async () => {
{   
    const filePath = path
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath.invalid)
    await rejects(result, rejection)
}
{
  const filePath = path
  const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
  const result = File.csvToJson(filePath.fuorInvalid)
  await rejects(result, rejection)
}
{
  const filePath = './mocks/threeItems-valid.csv'
  const result = await File.csvToJson(filePath)
  const expected = [
    
      {
        "id": 123,
        "name": "Erick Wendel",
        "profession": "Javascript Instructor",
        "age": 25
      },
      {
        "id": 321,
        "name": "Xuxa da Silva",
        "profession": "Javascript Specialist",
        "age": 80
      },
      {
        "id": 231,
        "name": "Joaozinho",
        "profession": "Java Developer",
        "age": 30
      }
    
  ]
  
  deepStrictEqual(result, expected)

}

  })();
  