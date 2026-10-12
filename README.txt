UnoApp b1v13

Upload all files in this ZIP to the root of the UnoApp GitHub repository, replacing the previous files.

Changes in b1v13:
- After the match-ending message is acknowledged with Ok, the app now opens the match-date picker. The selected date is used to create the next match.
- The date picker defaults to the current local date, which can be changed before continuing.
- Preserved b1v12 behavior, including scores, loss counts, Stats, and import/export.
- Updated service-worker cache version to b1v13.

The SQLite schema and browser storage location remain unchanged. Do not clear browser site data. Keep a backup before testing import because a successful import replaces the existing match and game records.
