UnoApp b1v7

This build fixes the service-worker routing for the normal GitHub Pages root address. The app root is now handled network-first, like index.html, so an older cached root page should not mask the current build. The service worker uses a new cache name and removes older unoapp-* caches when activated.

The SQLite database remains in IndexedDB; this update does not intentionally clear or modify it.

To install: upload the contents of this folder to the root of the GitHub repository used by GitHub Pages. Then open https://rendeb-dsb.github.io/UnoApp/ and confirm the header displays b1v7.
