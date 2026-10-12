UnoApp b1v12

Upload all files in this ZIP to the root of the UnoApp GitHub repository, replacing the previous files.

Changes in b1v12:
- Standardized system-message wording to “The UNO app says:”.
- Removed the Finish button from the Games screen.
- Added Stats calculations: average games per match (total recorded games divided by total matches, displayed to two decimal places); match losses for Don and Paula (matches where that player's accumulated score reaches 300 or more); and game losses for Don and Paula (number of game records where that player is the loser).
- Added right-justified Don and Paula game-loss counts alongside their accumulated scores on the Games screen.
- Increased the Score input width from 55px to 70px.
- Preserved the match-date prompt when starting a new match.
- Updated the service-worker cache version to b1v12.

The SQLite schema and browser storage location remain unchanged. Do not clear browser site data. Keep a backup before testing import because a successful import replaces the existing match and game records.
