import React from 'react';

const PersonalProjectBox = ( props ) => {
	const { name, address, techStack, description } = props;
	return(
		<div className="flex flex-col justify-center h-content w-1/4 mx-auto border-2 border-gray-300 rounded-md p-4">
			<h1 className="text-center font-josefin text-xl">{ name }</h1>
			<hr />
			<h2 className="text-center font-zilla text-blue-400">{ address }</h2>
			<hr />
			<h2 className="text-center font-zilla">{ techStack }</h2>
			<hr />
			<p className="text-center font-zilla">{ description }</p>
		</div>
	);
};

export default PersonalProjectBox;
