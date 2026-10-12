UnoApp b1v10

Upload all files in this ZIP to the root of the UnoApp GitHub repository, replacing the previous files.

Changes in b1v10: the gear opens “The Uno App asks:” with Import scores and Export Scores radio choices. Export creates a JSON backup of all Matches and Games named UNO-YYYYMMDD-HHMMSS.JSON. On browsers supporting the Save File Picker, choose the destination; otherwise the browser downloads the file and uses its normal save/download settings. Import accepts UNO-*.JSON backups, validates the complete file before making changes, asks for confirmation, then replaces all existing Matches and Games records. If validation fails or import is cancelled, existing records are unchanged.

The SQLite schema and browser storage location remain unchanged. Do not clear browser site data. Keep a backup before testing import because a successful import replaces the existing match and game records.
