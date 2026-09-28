# Astromon

A space creature RPG built with vanilla HTML, CSS, JavaScript, and a Node.js server. Collect animal-inspired companions, explore planets, and battle a friend using a private room code.

## Run locally

Install **Node.js 24 or newer**, then open the project folder in VS Code and run:

```sh
npm start
```

Open **http://localhost:3000**. Create a trainer account to receive exactly three level-one Astromon: **Emberkit, Frostfin, and Sproutlet**. Logging in again restores your saved progress; it does not grant another starter team.

There are no third-party runtime packages to install. `node server.mjs` also works. On Windows, you can double-click `start-windows.cmd`.

## Features

- Illustrated cosmic home screen, glowing blue interface, large companion showcase, working crew selector, stats, and skills.
- 190 collectible species: the original 70 plus 12 animal families with variants on all 10 planets. Planet variants reuse artwork with color shifts.
- Wolves, rabbits, bears, owls, tigers, panthers, puppies, lions, deer, hedgehogs, penguins, and manta rays. Natural bodies feature nebula colors, star markings, and a few tiny crystal accents.
- Player levels 1–10, with a new teleport destination at each level.
- Ten towns with healing, capsule shops, training, and mission boards.
- Three exploration areas and 19 available species per planet, with random encounters and differing rarity chances.
- Turn-based wild combat, capturing, eight missions, XP, coins, and a collection capacity of 400 creatures.
- Three computer-controlled trainers whose Astromon always match your current player level. Win a trainer battle for 45 XP and 30 coins. Trainer creatures cannot be captured.
- Real two-player stadium battles with private room codes and public matchmaking. Choose your leader, attack, use a special move, or guard. Both players' moves resolve together.
- Account registration, login, logout, and SQLite-backed progress saving.

## Battle a friend

Both players need separate accounts connected to the **same running server**.

1. Choose your lead Astromon in the Astrodex.
2. Open **Battle** and select **Create friend room**.
3. Share the eight-character code with your friend.
4. Your friend opens the stadium, enters the code, and selects **Join room**.

See [FRIEND-PLAY.md](FRIEND-PLAY.md) for connecting two computers on the same trusted Wi-Fi network. Private rooms expire after ten minutes. Stadium creatures are balanced to level 5; stadium damage does not damage your exploration crew.

## Tests

```sh
npm test
```

Checks cover species data, exactly three starting companions, planet gates, progression, mission rewards, wild-battle recovery, level-matched trainers, capture restrictions, registration, sessions, persistence across restarts, public matchmaking, and private friend battles. The included GitHub Actions workflow runs checks on Windows and Linux with Node.js 24.

## Project layout

```text
.github/workflows/ci.yml  GitHub test workflow
server.mjs               HTTP server, accounts, SQLite, friend rooms
engine.mjs               Combat, encounters, capturing, progression
public/
  index.html             Browser entry point
  app.mjs                Login and gameplay screens
  world.mjs              Species, animals, planets, areas, missions
  cosmic.mjs             Companion showcase and navigation
  style.css              Base interface styles
  cosmic.css             Cosmic interface layout
  space-polish.css        Subtle stars and orbital atmosphere
  *.png                   Original creature and landscape artwork
test/game.test.mjs       Gameplay and multiplayer checks
examples/                Preserved earlier standalone prototype
```

The earlier standalone HTML prototype is preserved for reference in `examples/earlier-prototype.html`; the server uses `public/index.html`.

## Configuration

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `3000` | Server port |
| `HOST` | `127.0.0.1` | Listening address; use `0.0.0.0` for trusted LAN access |
| `DATA_DIR` | Project `data/` folder | Persistent database directory |
| `COOKIE_SECURE` | Unset | Set to `1` when served over HTTPS |

Set environment variables in your terminal or hosting provider; this project does not automatically load `.env` files.

## Saves and backups

Progress is stored in `data/astromon.sqlite`. Stop the server, then copy the entire `data` folder somewhere safe. Do not commit or share this folder: it contains private player data, password hashes, and sessions. The repository ignore rules exclude database files and local secrets.

Existing creature IDs are preserved when adding new species. Back up your data before replacing an older source version.

## GitHub and online play

Follow [GITHUB-SETUP.md](GITHUB-SETUP.md) to create and upload your repository. Packaging does not create a GitHub repository or publish the game.

GitHub Pages alone cannot host this Node.js multiplayer server. Internet play needs Node.js 24 hosting behind HTTPS with persistent storage. This is a single-server prototype: live matchmaking is in memory and ends on restart. See [SECURITY.md](SECURITY.md) for deployment limitations.

## Artwork and licensing

Original game artwork was generated for this project. [ART-NOTES.md](ART-NOTES.md) records the assets and their prompt briefs. The reference screenshot is not bundled.

No open-source license has been selected. The repository owner should choose a license before offering the code for reuse.
