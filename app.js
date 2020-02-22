const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateNonesense = require('./nonesenseGenerator')
const handlebars = require("handlebars")

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting static files
app.use(express.static('public'))

// set hbs-helpers
handlebars.registerHelper('if_equal', function (occupation, expectedJob, options) {
  if (occupation === expectedJob) {
    return options.fn(this);
  }
  return options.inverse(this);
});

app.get('/', (req, res) => {
  res.render('index')
})
// post 
app.post('/', (req, res) => {
  console.log(req.body)
  const occupation = req.body.occupation
  const nonesense = generateNonesense(req.body)
  res.render('index', { nonesense: nonesense, occupation: occupation })
})

app.listen(port, () => {
  console.log(`Express is running on localhost ${port}`)
})


