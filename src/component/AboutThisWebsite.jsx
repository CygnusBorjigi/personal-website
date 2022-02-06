import React from 'react';
import { useNavigate } from 'react-router-dom';
import rightArrow from './svgs/right-arrow.svg';

const PersonalLife = () => {
	const navigate = useNavigate();
	const handelClick = () => {
		navigate('/');
	};
	return(
		<div>
			<div className="fixed right-0 mr-4 mt-4 h-8 w-8 z-10">
				<img src={ rightArrow } alt={ 'back button' } onClick={() => handelClick()} />	
			</div>
			<div className="text-center text-3xl w-1/3 mx-auto font-josefin mt-40">
				Frameworks
			</div>
			<div className="text-center text-xl w-1/3 mx-auto font-zilla mt-5">
				This website as coded using mainly JavaScript with the 
				React.js front-end framework. The animation of cubes in the
				backgaround is powered by three.js. 

			</div>
			<div className="text-center text-3xl w-1/3 mx-auto font-josefin mt-20">
				Hosting
			</div>
			<div className="text-center text-xl w-1/3 mx-auto font-zilla mt-5">
				The website is currently being hoested on a Ubuntu server provided
				by Digital Ocean.
			</div>
			<div className="text-center text-3xl w-1/3 mx-auto font-josefin mt-20">
				Source Code
			</div>
			<div className="text-center text-xl w-1/3 mx-auto font-zilla mt-5">
				You can view the entire source code directory on my <a href="https://github.com/CygnusBorjigi/personal-website" className="text-blue-600 ml-1">github page</a>
			</div>
		</div>
	);
};

export default PersonalLife;
