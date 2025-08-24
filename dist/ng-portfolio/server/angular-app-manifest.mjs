
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
    'index.csr.html': {size: 3117, hash: 'd934f2b304b343eab26f30eb9594a8616c508e9a23da6027ee1d91f24da63f73', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 949, hash: '5c397e75ebea7bce5122f6acbc0436f7c3bcc84d2b75a29a1d8ebb5e8e867d30', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 66675, hash: 'bcbe7ab5371fd8e0bac447966cb401e73ddf806b3aa317531ff793b943ab415e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6MNSGL7X.css': {size: 90476, hash: '7FR2p5LD+fc', text: () => import('./assets-chunks/styles-6MNSGL7X_css.mjs').then(m => m.default)}
  },
};
