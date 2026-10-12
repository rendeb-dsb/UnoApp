UnoApp b1v5
===========

This build addresses stale app files and hardens match-date validation.

Important install steps:
1. Upload all files in this folder to the ROOT of the GitHub Pages published folder, replacing existing files.
2. In the browser, reload the published site. This build uses a new service-worker cache version and requests fresh index.html/sw.js.
3. If the browser still shows an old build, open the site in Chrome, tap the site controls icon > Site settings > Storage and clear site data, then reload. WARNING: clearing site data can delete the locally stored UnoDB database. Do this only after backing up/if there is no data you need to preserve.

The date control's displayed date may be localized (for example MM/DD/YYYY), but its value is stored as ISO YYYY-MM-DD and validated accordingly.
