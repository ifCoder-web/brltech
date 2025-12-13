const express = require('express')
const app = express()
const port = process.env.PORT || 8081

// Configs
    // View Engine
    app.set('view engine', 'ejs');

    // Static
    app.use(express.static('public'));

    // Redirect
    app.use((req, res, next) => {
      if (req.hostname === 'brltech.com.br') {
        return res.redirect(301, 'https://www.brltech.com.br' + req.originalUrl);
      }else if (req.hostname === 'https://brltech.com.br') {
        return res.redirect(301, 'https://www.brltech.com.br' + req.originalUrl);
      }
      next();
    });

app.get('/', (req, res) => {
  res.render("index")
})

app.listen(port, () => {
  console.log(`No ar! Porta: ${port}`)
})
