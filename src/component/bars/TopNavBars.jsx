// import frameworks
import React from 'react';
import { useNavigate } from 'react-router-dom';


// import components
import NavButton from '../buttons/NavButton.jsx';

const TopNavBar = () => {
	const navigate = useNavigate();
	const toSummary = () => {
		navigate('/summary');
		console.log('to summary is clicked');
	};
	const toExperience = () => {
		navigate('/experience');
		console.log('to experience is clicked');
	};

	const toProject = () => {
		navigate('/projects');
	};

	return(
		<div
			className="mt-4 h-8 w-screen z-5 grid grid-cols-5 gap-0"
		>
			<NavButton text={ "summary" } func={ toSummary }/>
			<div></div>
			<NavButton text={ "experience" } funce={ toExperience } />
			<div></div>
			<NavButton text={ "Personal Projects" } func={ toProject } />
		</div>
	);
};

export default TopNavBar;
