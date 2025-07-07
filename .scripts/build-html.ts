import fs from 'fs';
import path from 'path';

import { render } from '../src/entry-server';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const manifestPath = path.resolve(__dirname, '../dist/.vite/manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

const entry = manifest['src/entry-client.tsx'];
const jsFile = entry?.file;
const cssFiles = entry?.css || [];

console.log('manifest js:', jsFile);
console.log('manifest css:', cssFiles);

const cssLinks = cssFiles.map((href: string) => `<link rel="stylesheet" href="./${href}">`).join('\n');

const jsScript = jsFile ? `<script type="module" src="./${jsFile}"></script>` : '';

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>맘찬픽</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // https://github.com/rafrex/spa-github-pages
      // Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
      // ----------------------------------------------------------------------
      // This script checks to see if a redirect is present in the query string
      // and converts it back into the correct url and adds it to the
      // browser's history using window.history.replaceState(...),
      // which won't cause the browser to attempt to load the new url.
      // When the single page app is loaded further down in this file,
      // the correct url will be waiting in the browser's history for
      // the single page app to route accordingly.
      (function (l) {
        if (l.search) {
          var q = {};
          l.search
            .slice(1)
            .split('&')
            .forEach(function (v) {
              var a = v.split('=');
              q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
            });
          if (q.p !== undefined) {
            window.history.replaceState(
              null,
              null,
              l.pathname.slice(0, -1) + (q.p || '') + (q.q ? '?' + q.q : '') + l.hash,
            );
          }
        }
      })(window.location);
    </script>
    ${cssLinks}
  </head>
  <body>
    <div id="root">${render()}</div>
    ${jsScript}
  </body>
</html>`;

fs.writeFileSync(path.resolve(__dirname, '../dist/index.html'), html);
console.log('✅ Static HTML generated.');
