UnoApp b1v24

Upload the contents of this folder to the root of your GitHub UnoApp repository.

Changes in b1v24:
- One-time database reset on the first launch of b1v24: clears all existing Matches and Games records.
- Resets SQLite AUTOINCREMENT counters so new MatchId and GameId values start at 1.
- The reset runs only once; subsequent app launches preserve records created after the reset.
- Existing app features and database schema are otherwise retained.

IMPORTANT: This version intentionally clears all existing match and game data on its first launch. Export any data you want to keep before installing b1v24. The reset does not repeat after its completion marker is stored in browser local storage.


b1v24 changes: Scores may be whole numbers zero or greater. Existing Games tables are migrated in place to allow zero scores while preserving existing records and primary keys. The Games list includes a radio selector column and Change button; selected game records can be edited and saved, with modified rows highlighted bold green.

New in b1v24: loser selection automatically focuses the Score field; compact game-entry spacing; optional Keep screen awake toggle uses the browser Screen Wake Lock API when supported. This does not change the device OS timeout setting.
