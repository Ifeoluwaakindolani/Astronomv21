# Battle a friend

Run `node server.mjs` with Node.js 24 or newer and open http://localhost:3000. Both players need separate accounts on this same server. Choose your lead creature in the Astrodex before entering the stadium.

1. Open PvP stadium and choose **Create friend room**.
2. Give your friend the eight-character code.
3. Your friend opens PvP stadium, enters the code, and chooses **Join room**.
4. Each player picks Star strike, Special attack, or Guard. The round resolves after both choose. A sole ready player wins if the 90-second round timer expires.

Room codes expire after ten minutes. Close a waiting room to resume exploring. Completed matches grant XP and coins once. Rooms and matches end if the server restarts; saved account progress remains.

## Two computers on the same Wi-Fi

In the server computer's PowerShell terminal:

```powershell
$env:HOST = '0.0.0.0'
node server.mjs
```

Run `ipconfig` and find the IPv4 address of your active Wi-Fi connection. Your friend opens `http://YOUR-IP-ADDRESS:3000`. Use your actual local address, not `0.0.0.0` or your friend's localhost. Allow Node through the Windows private-network firewall if prompted. This local HTTP setup is for a trusted network; use a password unique to this game.

For friends outside your network, this server needs online hosting with HTTPS and persistent storage. It has not been deployed online.
