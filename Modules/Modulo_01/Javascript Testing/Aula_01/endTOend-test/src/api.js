const http = require('http')
const PORT = 3000

const DEFAULT_USER ={
    username: 'Eurico',
    password: '234',
    email: 'euricoteste@gmail.com'
}

const routes = {
    '/contact:get': (request, response) =>{
        response.write('contact us page')
        return response.end()
    },
    '/login:post': async (request, response) => {
        for await (const data of request) {
            const user = JSON.parse(data)
            if (
                user.username !== DEFAULT_USER.username ||
                user.password !== DEFAULT_USER.password ||
                user.email !== DEFAULT_USER.email

            ) {
                response.writeHead(401)
                response.write("Logging failed!")   
                return response.end()
            }
        }
        response.write('Logging has succeeded!')
        return response.end()

    },
    default: (request, response) => {
        response.write('Hello World')
        return response.end()
    }
}

const handler = function(request, response) {
    const { url, method } = request
    const routKey = `${url}:${method.toLowerCase()}`
    const chosen = routes[routKey] || routes.default
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    return chosen(request, response)

}
const app = http.createServer(handler)
                .listen(PORT, () => console.log(`is runing IN port: ${PORT}`))

module.exports = app;