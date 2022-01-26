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
			<div>
				
			</div>
		</div>
	);
};

export default Summary;
