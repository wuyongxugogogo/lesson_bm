const _ = require('lodash')
const compiler = _.template('<h1><%%></h1>')
const html = compiler({title: 'My Component'})
console.log(html)