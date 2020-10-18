//importando pacotes
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//const index = path.join(__dirname, 'views', 'index.html')
//import express from 'express'

//iniciando o express
//import server from express()
const server = express()

//usando arquivos estaticos
server.use(express.static('public'))

//utilizar body do req
server.use(express.urlencoded({ extended: true }))

//configurando template engine
server.set('views', path.join(__dirname, "views")) .set('view engine', 'hbs')

//criando rotas
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)
server.post('/save-orphanage', pages.saveOrphanage)

// ligando o server
server.listen(5500)

