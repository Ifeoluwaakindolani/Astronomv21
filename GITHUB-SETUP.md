# Put Astromon on GitHub

1. Extract `Astromon-GitHub.zip` and open the `astromon` folder in VS Code.
2. On GitHub, create an empty repository named `astromon`. Choose private or public yourself. Do not initialize it with a README because this project already includes one.
3. Run the following in the VS Code terminal. Replace `YOUR-USERNAME` with your GitHub username:

```sh
git init -b main
git add .
git commit -m "Add Astromon space creature game"
git remote add origin https://github.com/YOUR-USERNAME/astromon.git
git push -u origin main
```

If Git asks for your author name and email, configure the identity you want associated with your commits. Use your GitHub sign-in when Git asks to authenticate; do not put passwords or tokens in project files.

Alternatively, use GitHub Desktop to add this folder as a local repository, make a commit, and publish it.

The included workflow runs syntax, gameplay, account saving, and real two-player tests on Windows and Linux with Node.js 24. It starts automatically on pushes and pull requests when GitHub Actions is enabled for the repository.

## What is intentionally excluded

Private player databases, session data, local environment files, test fixtures, and dependencies are not included in this package. `.gitignore` excludes future local save data, too. Do not force-add your `data` folder or `.env` files.

## Hosting the game

Uploading source to GitHub does not put the multiplayer server online. GitHub Pages alone cannot run this Node.js/SQLite server. For internet play, deploy one Node.js 24 process behind HTTPS with persistent storage, and set `COOKIE_SECURE=1`. See the README for configuration.

The project has not been pushed to a GitHub account or published online by this packaging step.
