# Astromon — cosmic animal edition

Open this folder in VS Code. Install Node.js 24 or newer, then run:

```sh
node server.mjs
```

Open http://localhost:3000 and create a trainer. New accounts start with exactly three Astromon: Emberkit, Frostfin, and Sproutlet. Existing accounts remain compatible: the original 70 creature IDs are unchanged.

This edition includes the illustrated cosmic interface, working companion selection and stats, 190 collectible species, 10 planets, towns, missions, wild battles, and real two-player battles with friend room codes. Twelve extra animal families have a variant on every planet. All 19 species on each planet appear in random encounters. The collection holds up to 400 creatures.

## Code files

- `public/world.mjs`: editable species, animal families, planets, and missions.
- `public/cosmic.mjs`: screenshot-inspired home layout and creature selector.
- `public/cosmic.css`: glowing blue panels, scenery, responsive layout, and golden Battle button.
- `public/app.mjs`: login, gameplay screens, and interactions.
- `engine.mjs`: combat, random encounters, capture chances, and progression.
- `server.mjs`: account saving, matchmaking, and friend rooms.

Creature art uses original painted sprites. The animal redesign emphasizes natural fur, feathers, scales, and fins, with constellation markings, nebula-colored tips, and a few tiny crystal accents. Planet variants reuse the animal illustrations with color variations.

The artwork is loaded from `public/cosmic-world.png`, `public/cosmic-creatures.png`, and `public/animal-creatures.png`. Keep those files with the project. No downloaded packages are needed.

See `FRIEND-PLAY.md` for playing together on a local network. Internet multiplayer requires hosting the Node server; this project is not published online.

Stop the server and back up the whole `data` folder to preserve accounts. Keep your original project before replacing source files, and preserve its `data` folder.

Run `npm test` to check gameplay and multiplayer.

