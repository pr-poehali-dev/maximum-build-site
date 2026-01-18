@echo off
echo ================================
echo Building site for Open Server
echo ================================
echo.

echo Step 1: Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b %errorlevel%
)

echo.
echo Step 2: Building production version...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    pause
    exit /b %errorlevel%
)

echo.
echo ================================
echo SUCCESS! Build completed.
echo ================================
echo.
echo The static files are now in the 'dist' folder.
echo.
echo Next steps:
echo 1. Copy all files from 'dist' folder to your Open Server directory
echo 2. Make sure .htaccess file is in the root directory
echo 3. Enable mod_rewrite in Apache (if using Apache)
echo 4. Open your site in browser
echo.
echo For detailed instructions, see BUILD_GUIDE.md
echo.
pause
