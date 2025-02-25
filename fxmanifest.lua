client_script '@yarn/client.lua'
server_script '@yarn/server.lua'

fx_version 'cerulean'
game 'gta5'

author 'AbdelRMB'
version '1.0.0'
description 'Bibliothèque de notifications personnalisées'

client_scripts {
    'client/main.lua'
}

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js',
    'html/notification.mp3'
}
