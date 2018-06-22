const HTML = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>${title}</title>
      <style>
        *, body{
          margin: 0;
          padding: 0;
        }
      </style>
    </head>
    <body>
      <div id="app">${body}</div>
    </body>
  </html>
`

export default HTML
