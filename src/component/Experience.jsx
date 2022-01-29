import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import experience from '../static_file/experience.json';
import ExperienceBox from './boxes/ExperienceBox';

const Experience = () => {
	return (
		<div className="w-1/2 mt-40 mx-auto">
			<div>
			{experience.exper.map(each => {
				const { organization, title, programmingLanguage, description } = each;
				return(
					<ExperienceBox 
						organization = { organization }
						role = { title }
						programmingLanguage = { programmingLanguage }
						description = { description }
					/>
				)
			}
			)}
			</div>
		</div>
	);
};

export default Experience;
