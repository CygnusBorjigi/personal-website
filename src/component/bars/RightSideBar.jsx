// import frameworks
import React from 'react';
import { useNavigate } from 'react-router-dom';

// import components
import NavButton from '../buttons/NavButton.jsx';

const RightSideBar = () => {
	const navigate = useNavigate();

	const toContact = () => {
		navigate('/contact');
	};
	const toSkill = () => {
		navigate('/skill');
	}
	return (
		<div className="fixed right-4 h-screen z-5 grid grid-rows-8">
			<div className="row-start-4">
				<NavButton text={ "Skill" } func={ toSkill } />
			</div>
			<div className="row-start-7">
			</div>
		</div>
	)
};

export default RightSideBar;
