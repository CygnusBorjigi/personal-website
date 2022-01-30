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
	const toLife = () => {
		navigate('/life');
	}
	return (
		<div className="fixed left-4 h-screen z-5 grid grid-rows-8">
			<div className="row-start-4">
				<NavButton text={ "Education" } func={ toEducation } />
			</div>
		<div className="row-start-7">
			</div>
		</div>
	)
};

export default LeftSideBar;
