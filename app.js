const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./app/routes/index.js');
const searchRouter = require('./app/routes/search.js');
const categoriesRouter = require('./app/routes/categories.js');
const roadmapRouter = require('./app/routes/roadmap.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use('', indexRouter);
app.use('/pesquisa', searchRouter);
app.use('/categorias', categoriesRouter)
app.use('/roadmap', roadmapRouter)

app.listen(process.env.PORT ? Number(process.env.PORT) : 3000, ()=>
{
    console.log('Servidor Iniciado!');
})