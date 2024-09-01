fx_version 'cerulean'
game 'gta5'

lua54 'yes'

author 'ZIRAFLIX'
contact 'Website: www.ziraflix.com.br - E-mail: contato@ziraflix.com - Discord: discord.gg/ziraflix'

client_scripts {
	'@vrp/lib/utils.lua',
	'@PolyZone/client.lua',
	'config/*',
	'client/*'
}

server_scripts {
	'@vrp/lib/utils.lua',
	'config/*',
	'server/*'
}

files {
	'web/*',
	'web/**/*'
}

escrow_ignore {
	'config/*',
}