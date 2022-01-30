import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import experience from '../static_file/experience.json';
import ExperienceBox from './boxes/ExperienceBox';
import rightArrow from './svgs/right-arrow.svg';
import { useNavigate } from 'react-router-dom';
import ExperienceBackground from './3dModels/ExperienceBackground.js';

const Experience = () => {
	const navigate = useNavigate();
	const handelClick = () => {
		navigate('/');
	};
	return (
		<div className="w-1/2 mt-40 mx-auto">
			<div className="fixed top-0 left-0 h-screen w-screen">
				<div className="fixed right-0 mr-4 mt-4 h-8 w-8 z-10">
					<img src={ rightArrow } alt={ 'back button' } onClick={() => handelClick()} />	
				</div>
			<div className="mt-20">
				{experience.exper.map(each => {
					const { organization, title, programmingLanguage, description, time } = each;
					return(
						<ExperienceBox 
							organization = { organization }
							role = { title }
							programmingLanguage = { programmingLanguage }
							time={ time }
							description = { description }
						/>
					)
				}
				)}
			</div>
			<div className="fixed top-0 left-0 h-screen w-screen -z-10">
				<ExperienceBackground />
			</div>
		</div>
		</div>
	);
};

export default Experience;
