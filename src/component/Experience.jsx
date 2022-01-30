import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import experience from '../static_file/experience.json';
import ExperienceBox from './boxes/ExperienceBox';
import ExperienceBackground from './3dModels/ExperienceBackground.js';

const Experience = () => {
	return (
		<div className="w-1/2 mt-40 mx-auto">
			<div>
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
	);
};

export default Experience;
