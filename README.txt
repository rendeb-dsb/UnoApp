UnoApp b1v2
===========

This build adds a calendar date prompt when starting a new match.

New behavior:
- Press the opening UNO graphic.
- If an active match exists, open its Games screen immediately without prompting for a date.
- If no active match exists, a popup calendar asks for the new match date.
- Continue creates the match using the selected date and the current local time.
- Cancel closes the popup without creating a match.

Upload all files in this folder to the root of the GitHub Pages repository. Initial launch requires an Internet connection to load SQLite WebAssembly. The SQLite database is persisted locally in browser-managed storage.
