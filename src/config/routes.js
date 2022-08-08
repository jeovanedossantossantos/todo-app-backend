const express = require('express')

module.exports = function(server){
    
    const router = express.Router()
    server.use('/', router)

    const todoServer = require('../api/todo/todoService')
    todoServer.register(router, '/')
}