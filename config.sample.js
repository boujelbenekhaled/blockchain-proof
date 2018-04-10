module.exports = {
	tierion: {
	    client_secret: '26341b5863f73f0e990c6321be90fa46dfb1662d',
		username: 'boujelbenekhaled@gmail.com',
		password: 'realmadrid7'
	},

    pubnub: {
        ssl           : false,
        publish_key: 'pub-c-da7c823c-c915-4822-ace4-a05b3c6e5633',
        subscribe_key: 'sub-c-10ecd698-39f7-11e8-a433-9e6b275e7b64',
		registered_channel: 'registered_channel',
		confirmed_channel: 'confirmed_channel'
    },

url: 'https://1235414f.ngrok.io',
	
	db: 'existence',
	
	port: process.env.APP_PORT || 3000
};