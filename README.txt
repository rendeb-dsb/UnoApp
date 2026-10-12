UnoApp b1v11

Upload all files in this ZIP to the root of the UnoApp GitHub repository, replacing the previous files.

Changes in b1v11:
- Standardized system-message wording to “The UNO app says:”.
- Removed the Finish button from the Games screen.
- Added Stats calculations: average games per match (total recorded games divided by total matches, displayed to two decimal places); match losses for Don and Paula (matches where that player's accumulated score reaches 300 or more); and game losses for Don and Paula (number of game records where that player is the loser).
- Updated the service-worker cache version to b1v11.

The SQLite schema and browser storage location remain unchanged. Do not clear browser site data. Keep a backup before testing import because a successful import replaces the existing match and game records.
