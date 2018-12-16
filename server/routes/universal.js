import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { renderString } from 'template-file';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider
} from 'styled-components';

import App from '../../src/App';
import theme from '../../src/global/theme';
import template from '../templates';
import manifest from '../../build/asset-manifest.json';
import createStore from '../src/store';

module.exports = (req, res) => {
  const context = {};

  if (context.url) {
    // Redirect if need be
    return res.redirect(301, context.url);
  } else {
    try {
      const pageUrl = req.url;
      const modules = [];

      // Create a store (with a memory history) from our current url
      const { store } = createStore(pageUrl);

      // Get a copy of store data to create the same store on client side
      const state = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

      // Pull CSS from Styled Components
      const sheet = new ServerStyleSheet();

      const body = renderToString(
        <Provider store={store}>
          <StyleSheetManager sheet={sheet.instance}>
            <ThemeProvider theme={theme}>
              <StaticRouter location={pageUrl} context={context}>
                <App data={state} />
              </StaticRouter>
            </ThemeProvider>
          </StyleSheetManager>
        </Provider>
      );

      // Let's give ourself a function to load all our page-specific JS assets for code splitting
      const extractAssets = (assets, chunks) =>
        Object.keys(assets)
          .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
          .map(k => assets[k]);

      // Let's format those assets into pretty <script> tags
      const scripts = extractAssets(manifest, modules).map(
        c =>
          `<script type="text/javascript" src="/${c.replace(
            /^\//,
            ''
          )}"></script>`
      );

      // We need to tell Helmet to compute the right meta tags, title, and such
      const { htmlAttributes, meta, title } = Helmet.renderStatic();

      const data = {
        body,
        htmlAttributes,
        meta,
        scripts,
        state,
        title
      };

      // Pass all this nonsense into our HTML formatting function above
      const RenderedApp = renderString(template, data);

      // We have all the final HTML, let's send it to the user already!
      res.send(RenderedApp);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  }
};
