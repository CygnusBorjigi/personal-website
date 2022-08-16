import React from 'react';
import { useNavigate } from 'react-router-dom';

import PersonalProjectBox from './boxes/PersonalProjectBox';
import rightArrow from './svgs/right-arrow.svg';
import PersonalProjectBackground from './3dModels/PersonalProjectBackground.js';
import personalProject from '../static_file/personalProject.json';

const PersonalProject = () => {
	const navigate = useNavigate();
	const handelClick = () => {
		navigate('/');
	};

	return(
		<div className="w-1/2 mt-40 mx-auto">
			<div className="fixed top-0 left-0 h-screen w-screen">
				<div className="fixed right-0 mr-4 mt-4 h-8 w-8 z-10">
					<img src={ rightArrow } alt={ 'back button' } onClick={() => handelClick()} />	
				</div>
			</div>
		{ personalProject.data.map(each => {
			return(
				<PersonalProjectBox 
					name={ each.name }
					address={ each.address }
					techStack={ each.techStack }
					description={ each.description }
				/>
			)
		}) }
			<div className="fixed top-0 left-0 h-screen w-screen -z-10">
				<PersonalProjectBackground />
			</div>
		</div>
	);
};

export default PersonalProject;

