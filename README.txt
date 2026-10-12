UnoApp b1v6
===========

Fix: New-match date validation now parses the YYYY-MM-DD input value using split fields rather than a regular expression. This avoids the escaping bug that caused a valid date to be rejected.

Also increments the app and service-worker cache version to b1v6 and requests fresh app-shell files.

Upload all files in this folder to the GitHub Pages publishing root. The date shown on Android may look like MM/DD/YYYY; the underlying input value should be YYYY-MM-DD.
