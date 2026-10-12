UnoApp b1v22

Upload the contents of this folder to the root of your GitHub UnoApp repository.

Changes in b1v22:
- One-time database reset on the first launch of b1v22: clears all existing Matches and Games records.
- Resets SQLite AUTOINCREMENT counters so new MatchId and GameId values start at 1.
- The reset runs only once; subsequent app launches preserve records created after the reset.
- Existing app features and database schema are otherwise retained.

IMPORTANT: This version intentionally clears all existing match and game data on its first launch. Export any data you want to keep before installing b1v22. The reset does not repeat after its completion marker is stored in browser local storage.
