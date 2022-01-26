import React from 'react';
import { useNavigate } from 'react-router-dom';
import rightArrow from './svgs/right-arrow.svg';

const Summary = () => {
	const navigate = useNavigate();
	const handelClick = () => {
		navigate('/');
	};
	return (
		<div className="fixed top-0 left-0 h-screen w-screen bg-gray-200">
			<div className="fixed right-0 mr-4 mt-4 h-8 w-8 z-10">
				<img src={ rightArrow } alt={ 'back button' } onClick={() => handelClick()} />	
			</div>
			<div className="fixed w-screen flex flex-rows justify-center">
				<p className="mt-80 text-center text-xl basis-1/3 font-mulish">
					I have been programming for the past 15 years and I am currently in the third year of my B.A degree in Computer Science at Boston University. I am proficient in the SDLC and DevOps process and have experience in every step of the Full-Stack software development and deployment cycle.
				</p>
			</div>
		</div>
	);
};

export default Summary;
