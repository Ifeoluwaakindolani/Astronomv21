# Security and deployment notes

This project is a local-first game prototype. Accounts use salted scrypt password hashes, HttpOnly/SameSite cookies, expiring sessions, origin checks for browser writes, and basic per-process login throttling. Game rewards and battle outcomes are calculated on the server.

For internet deployment, use HTTPS, set `COOKIE_SECURE=1`, run one Node process with persistent storage, and arrange backups, monitoring, account recovery, and moderation. In-memory friend rooms and matches are lost on server restart. Multiple independent server processes do not share matchmaking state.

Use passwords unique to this game during local HTTP testing. Keep player databases, sessions, and environment secrets out of source control. Stop the server before copying the entire `data` directory as a backup.

No vulnerability-reporting contact has been configured. Once a repository is created, its owner can configure GitHub private vulnerability reporting. Do not publish credentials or live player data in an issue.
