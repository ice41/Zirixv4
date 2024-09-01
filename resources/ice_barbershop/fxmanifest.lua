fx_version 'bodacious'
game 'gta5'

author "ice41- http://www.ice41.pt"

ui_page 'nui/ui.html'

files {
    'nui/ui.html',
    'nui/ui.css',
    'nui/ui.js',
    'nui/fonts/big_noodle_titling-webfont.woff',
    'nui/fonts/big_noodle_titling-webfont.woff2',
    'nui/fonts/pricedown.ttf',
}

client_scripts {
	'@vrp/lib/utils.lua',
	'client.lua'
}

server_scripts {
	'@vrp/lib/utils.lua',
	'server.lua'
}

                                                                                    