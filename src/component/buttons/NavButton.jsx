// import frame works
import React from 'react';

const NavButton = ( props ) => {
	const { text, func } = props;

	return(
		<button 
			onClick={ func }
			className="w-content h-8 mx-auto px-2 bg-gray-200 border-2 border-gray-300 rounded-md font-playfair hover:bg-gray-500 text-xl"
		>
			{ text }
		</button>
	);
};

export default NavButton;
