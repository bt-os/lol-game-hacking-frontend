@ECHO OFF

REM CD /D "%1"
SED -r -i "s/(assets\/)(.*)/https:\/\/rgis.me\/files\/\1\2/g" index.html

PAUSE