// import frameworks
import React from 'react';
import { useNavigate } from 'react-router-dom';

// import components
import NavButton from '../buttons/NavButton.jsx';

const LeftSideBar = () => {
	const navigate = useNavigate();
	const toEducation = () => {
		navigate('/education');
		console.log('to education clicked');
	};
	return (
		<div className="fixed left-4 h-screen z-5 flex flex-col justify-center">
			<div className="-rotate-90">
				<NavButton text={ "Education" } func={ toEducation } />
			</div>
		</div>
	)
};

export default LeftSideBar;
