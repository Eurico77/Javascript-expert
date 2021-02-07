const File = require('./src/file')
const { error } = require('./src/constants')
const assert = require('assert')
const path = require('./src/utils/paths')


;
(async () => {
// {   
//     const filePath = path
//     const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
//     const result = File.csvToJson(filePath.invalid)
//     await rejects(result, rejection)
// }
// {
//   const filePath = path
//   const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
//   const result = File.csvToJson(filePath.fuorInvalid)
//   await rejects(result, rejection)
// }
{
  const filePath = './mocks/threeItems-valid.csv'
  const result = await File.csvToJson(filePath)
  const expected = [
    {
      "name": "Erick Wendel",
      "id": 123,
      "profession": "Javascript Instructor",
      "birthDay": 1995
  },
  {
      "name": "Xuxa da Silva",
      "id": 321,
      "profession": "Javascript Specialist",
      "birthDay": 1940
  },
  {
      "name": "Joaozinho",
      "id": 231,
      "profession": "Java Developer",
      "birthDay": 1990
  }
    
  ]
  assert.deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
}
  })();
  