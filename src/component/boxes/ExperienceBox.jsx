import React from 'react';

const ExperienceBox = ( props ) => {
	const { organization, role, programmingLanguage, description, time } = props;
	console.log("this is working");
	return(
		<div className="flex flex-col justify-center h-content w-1/4 mx-auto border-2 border-gray-300 rounded-md p-4">
			<p className="text-center font-zilla">{ time }</p>
			<hr />
			<h1 className="text-center font-josefin text-xl">{ organization }</h1>
			<hr />
			{role.map(each => {
					return(<h2 className="text-center font-zilla">{ each }</h2>)
				})
			}
			<hr />
			<h2 className="text-center font-zilla">{programmingLanguage}</h2>
			<hr />
			<p className="text-center font-zilla">{ description }</p>
		</div>
	);
};

export default ExperienceBox;
