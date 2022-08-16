import React from 'react';
import { Canvas } from 'react-three-fiber';

import LinearMoveBox from './LinearMoveBox.js';

const PersonalProjectBackground = () => {
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
				plain={ "x" } 
				moveSpeed={ 5 }  
				rotationSpeed={ 3 }
				color={ 'white' }
				xPos={ 0 }
				yPos={ 18 }
				startPos={ each }
				range={ 20 }
			/>

			)
		}) }
		{ range.map(each => {
			return(
			<LinearMoveBox 
				plain={ "x" } 
				moveSpeed={ 5 }  
				rotationSpeed={ 3 }
				color={ 'white' }
				xPos={ 0 }
				yPos={ -18 }
				startPos={ each * -1 }
				range={ 12 }
			/>

			)
		}) }
		</Canvas>
	);
};

export default PersonalProjectBackground;
