@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Please install Node.js 24 or newer, then run this file again.
  pause
  exit /b 1
)
echo Open http://localhost:3000 in your browser after Astromon starts.
node server.mjs
pause
