// import frameworks
import React from 'react';
import { useNavigate } from 'react-router-dom';

// import components
import NavButton from '../buttons/NavButton.jsx';

const RightSideBar = () => {
	const navigate = useNavigate();
	const toContact = () => {
		navigate('/contact');
		console.log('to contacnt clicked');
	};
	return (
		<div className="fixed right-4 h-screen z-5 flex flex-col justify-center">
			<div className="rotate-90">
				<NavButton text={ "Say Hi ..." } func={ toContact } />
			</div>
		</div>
	)
};

export default RightSideBar;
