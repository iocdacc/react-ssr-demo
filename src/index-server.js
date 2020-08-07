import Koa from 'koa';
import serve from 'koa-static';
import compress from 'koa-compress';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";
import { storeServer } from './store';
import { Provider } from 'react-redux';
import routes from './routes';

let store = storeServer()

let AppServer = async (url, ctx)=>{
  await (async function (){ // 数据预取
    let componentArray = matchRoutes(routes, url)
    if (!componentArray) return
    for (let index = 0; index < componentArray.length; index++) {
      const v = componentArray[index];
      v.route.component.loadData && await v.route.component.loadData(store.dispatch, store.getState())
    }
  })()

  const AppServer = porps => {
    return (
      <Provider store={store}>
        <StaticRouter location={url} context={ctx}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    )
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="./main.css" rel="stylesheet">
    </head>
    <body>
      <div id='root'>${ReactDOMServer.renderToString(<AppServer/>)}</div>
      <script>window.__serverData__ = ${JSON.stringify(store.getState())}</script>
      <script src="./main.js"></script>
    </body>
    </html>
  `

  return html.replace(/\n|\r/g,"")
}

const app = new Koa();

app.use(serve(path.resolve(__dirname, '../client')));

app.use(compress({threshold: 2048}));

app.use(async (ctx, next) => { 
  ctx.body = await AppServer(ctx.request.url, ctx)
});

app.listen(3000);