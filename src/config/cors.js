module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://todo-app-frontend-react-dfwt2v8fl-jeovanedossantossantos.vercel.app/')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
    
}
