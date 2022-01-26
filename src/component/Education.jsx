import React from 'react';
import { useNavigate } from 'react-router-dom';
import rightArrow from './svgs/right-arrow.svg';
import RingBox from './3dModels/BoxRings';

const Education = () => {
	const navigate = useNavigate();
	const handelClick = () => {
		navigate('/');
	};
	return (
		<div className="fixed top-0 left-0 h-screen w-screen bg-gray-200">
			<div className="fixed right-0 mr-4 mt-4 h-8 w-8 z-10">
				<img src={ rightArrow } alt={ 'back button' } onClick={() => handelClick()} />	
			</div>
			<div className="fixed w-screen flex flex-col justify-center">
				<h1 className="text-center mt-40 font-sacramento text-8xl">Boston University</h1>
				<h1 className="text-center mt-40 font-sacramento text-6xl">B.A in Computer Science</h1>
				<h1 className="text-center mt-40 font-sacramento text-4xl">Class of 2023</h1>
			</div>
			<div className='fixed top-0 left-0 h-screen w-screen -z-10'>
				<RingBox surface={ 'xy' }/>
			</div>
		</div>
	);
};

export default Education;
