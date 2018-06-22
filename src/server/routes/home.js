import React from 'react'
import { renderToString } from 'react-dom/server'
import HTML from '../../views/html.template'
import Home from '../../pages/home'

function HomeRouter (req, res, next) {
  var body = renderToString(<Home />)
  res.send(HTML({body, title: 'Home'}))
}

export default HomeRouter