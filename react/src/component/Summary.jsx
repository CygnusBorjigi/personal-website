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
					I am seeking an internship opportunity in the field of software engineering to gain experience and learn from engineers who work on the real-world production of applications.
				</p>
				<p className="mt-10 text-center text-xl w-1/3 mx-auto font-zilla">
					Because it is my belief that the true value of computational theories is their ability to provide real people with a better life.
				</p>
				<p className="mt-10 text-center text-xl w-1/3 mx-auto font-zilla">
					With a background in Formal Method and Set Theory, I am capable of writing clean and efficient code followed by a formal proof of its logical integrity through rigorous mathematical reasoning.
				</p>
			<div className='fixed top-0 left-0 h-screen w-screen -z-10'>
				<SummaryBackground />
			</div>
		</div>
	);
};

 
export default Summary;
