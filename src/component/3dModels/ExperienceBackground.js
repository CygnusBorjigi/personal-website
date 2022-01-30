import React from 'react';
import { Canvas } from 'react-three-fiber';

import LinearMoveBox from './LinearMoveBox.js';

const ExperienceBackground = () => {
	let range = [];
	for (let i = 0; i < 10; i ++) {
		range.push(i);
	}
	return(
		<Canvas camera={ { position:[0, 20, 0] } }>
			<pointLight color='white' intensity={3} position={[0, 0, 0]} />
		{ range.map(each => {
			return(
			<LinearMoveBox 
				plain={ "y" } 
				moveSpeed={ 5 }  
				rotationSpeed={ 3 }
				color={ 'white' }
				xPos={ 18 }
				yPos={ 0 }
				startPos={ each }
				range={ 12 }
			/>

			)
		}) }
		{ range.map(each => {
			return(
			<LinearMoveBox 
				plain={ "y" } 
				moveSpeed={ 5 }  
				rotationSpeed={ 3 }
				color={ 'white' }
				xPos={ -18 }
				yPos={ 0 }
				startPos={ each * -1 }
				range={ 12 }
			/>

			)
		}) }
		</Canvas>
	);
};

export default ExperienceBackground;
