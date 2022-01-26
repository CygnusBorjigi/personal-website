import React from 'react';

const ExperienceBox = ( props ) => {
	const { organization, role, programmingLanguage, description } = props;

	return(
		<div className="flex flex-col justify-center h-content">
			<h1>{ organization }</h1>
			<h2>{ role }</h2>
			<h2>{ programmingLangauge }</h2>
			<p>{ description }</p>
		<div>
	);
};

export default ExperienceBox;
