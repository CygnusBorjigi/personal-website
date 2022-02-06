// import framework
import React, { useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';

// import component
import OrbitBox from './OrbitBox.js';

const AboutPageBackground = () => {
	return(
		<Canvas camera={ { position:[0, 22, 0] } }>
			<pointLight color='white' intensity={5} position={[0, 0, 0]} />
			
		{[1, 2, 3, 4, 5, 6, 7, 8].map(each => {
			return(<OrbitBox plain="yz" radius={8} orbitSpeed={ each/2 } rotationSpeed={2} center={ 15 } startPosition={ each }/>)
		})}
		{[1, 2, 3, 4, 5, 6, 7, 8].map(each => {
			return(<OrbitBox plain="yz" radius={8} orbitSpeed={ each/2 } rotationSpeed={2} center={ -15 } startPosition={ each }/>)
		})}
		</Canvas>
	);
};

export default AboutPageBackground;
