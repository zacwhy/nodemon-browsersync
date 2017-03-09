'use strict'

const express = require('express')
  , app = express()
  , port = 3000

app.get('/', (req, res) => {
  res.send('<body>hello world</body>')

  // Browsersync works by injecting an asynchronous script tag (<script async>...</script>)
  // right after the <body> tag during initial request.
  // In order for this to work properly the <body> tag must be present.
  //
  // https://github.com/BrowserSync/browser-sync#requirements
})

app.listen(port, () => {
  console.log('listening on port ' + port)
})
