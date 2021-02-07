const Service = require("./service");

const BASE_URL_1 = 'https://swapi.dev/api/planets/1/'
const BASE_URL_2 = 'https://swapi.dev/api/planets/3/'
const mocks = {
    tatooine: require('./mocks/totooine.json'),
    yavinIV: require('./mocks/yavinIV.json')

}
    

;
(async () => {

    {
        // usando a internet
    //     const service = new Service()
    //     const withhoutStub = await service.makeRequest(BASE_URL_2)
    //     console.log(JSON.stringify(withhoutStub));
    }
})()