import React from 'react';
import { useNavigate } from 'react-router-dom';
import rightArrow from './svgs/right-arrow.svg';
import SummaryBackground from './3dModels/SummaryBackground';

const Summary = () => {
	const navigate = useNavigate();
	const handelClick = () => {
		navigate('/');
	};
	return (
		<div>
			<div className="fixed right-0 mr-4 mt-4 h-8 w-8 z-10">
				<img src={ rightArrow } alt={ 'back button' } onClick={() => handelClick()} />	
			</div>
				<p className="mt-80 text-center text-xl w-1/3 mx-auto font-zilla">
					I have spent the past year exploring full stack application
					developemt, and has depolyed a my first application at <a href="hacktanium.io" className="text-blue-500"> hacktanium.io</a>.
				</p>
				<p className="mt-10 text-center text-xl w-1/3 mx-auto font-zilla">
					For my Computer Science degree, I mainly focuse on Formal Method
					and Recursion Theory and for my Mathematics minor I focuse on 
					first order logic and set theory
				</p>
				<p className="mt-10 text-center text-xl w-1/3 mx-auto font-zilla">
					Therefore, not only am I capable of writing clean and efficient code,
					I am also able to formally prove the logical integrity of my program
					through rigorous mathematical reasoning.
				</p>
			<div className='fixed top-0 left-0 h-screen w-screen -z-10'>
				<SummaryBackground />
			</div>
		</div>
	);
};

export default Summary;
