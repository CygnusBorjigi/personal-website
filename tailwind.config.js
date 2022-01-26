//font-family: 'Patrick Hand', cursive;
//font-family: 'Sacramento', cursive;
module.exports = {
	content: [
		    "./src/**/*.{js,jsx,ts,tsx}",
		  
	],
	theme: {
		extend: {
			fontFamily: {
				'patrick-hand': ['Patrick Hand', 'cursive'],
				'sacramento': ['Sacramento', 'cursive']
			}
		},
		  
	},
	plugins: [],
}
