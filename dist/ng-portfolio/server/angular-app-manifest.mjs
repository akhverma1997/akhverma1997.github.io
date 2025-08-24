
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3117, hash: 'baebfd6f39ff58412e1f2ff54562275511e7b0cc4b890d8d99ef00967fbcbbef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 949, hash: '7e76562193b659e160bd0a58933e57fde78ef238524decc9fea95b0c3bd6d05d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 61907, hash: 'f943facc34783f4745b717258cab7293c2d7bd7984b9de149197aaebbb066d06', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6MNSGL7X.css': {size: 90476, hash: '7FR2p5LD+fc', text: () => import('./assets-chunks/styles-6MNSGL7X_css.mjs').then(m => m.default)}
  },
};
