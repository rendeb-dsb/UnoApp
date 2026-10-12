UnoApp b1v1
===========

Files for the first UnoApp PWA build.

Install/test:
1. Upload all files in this folder to the root of a GitHub Pages repository.
2. Enable GitHub Pages for the main branch/root folder.
3. Open the published site in a browser while connected to the Internet once, so the SQLite WebAssembly library can load.
4. Add the site to the home screen if desired.

Database:
- SQLite database name: UnoDB (stored as a database in browser-managed local storage).
- Tables: Matches and Games.
- Matches.Date and Matches.Time are NOT NULL.
- Games.Loser is D or P; Games.Score must be a positive whole number.
- The SQLite database bytes are persisted in IndexedDB after each change.

Important:
- This is a first functional baseline. Stats is a placeholder.
- The Matches List shows newest match columns first, with yellow time cells to open a match.
- Match continues while both players' losing-point totals are below 300.
- SQLite is loaded from a CDN; initial launch requires Internet access. Game data itself is stored locally in the browser profile.
- Do not clear browser site data or uninstall the PWA before exporting/adding a backup feature in a later build.
