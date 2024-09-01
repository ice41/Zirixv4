@echo off

echo ===-------------------------------===
echo     ZIRIX V4 (4.0)
echo     Developed by: ZIRAFLIX
echo     Discord: discord.gg/ziraflix
echo     Contact: contato@ziraflix.com
echo ===-------------------------------===

pause
start ..\artifacts\FXServer.exe +exec config\config.cfg +set onesync on +set onesync_enableInfinity 1 onesync_enableBeyond 1 onesync_population 1 +set sv_enforceGameBuild 2699 +set svgui_disable true
exit