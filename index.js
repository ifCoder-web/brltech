const express = require('express')
const app = express()
const port = process.env.PORT || 8081

// Configs
    // View Engine
    app.set('view engine', 'ejs');

    // Static
    app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render("index")
})

app.listen(port, () => {
  console.log(`No ar! Porta: ${port}`)
})
