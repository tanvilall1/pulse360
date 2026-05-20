@echo off
set "PATH=C:\Users\Tanvi Lall\node-portable\node-v20.18.0-win-x64;%PATH%"
cd /d "c:\pulse360-website"
echo Starting development server on port 3000...
call npm run dev
