import React from 'react';
import { Canvas } from 'react-three-fiber';

import OrbitBox from './OrbitBox.js';

const SummaryBackground = () => {
	const surface = "xz";
	const orbitCenter = 0;
	return(
		<Canvas camera={ { position:[0, 20, 0] } }>
			<pointLight color='white' intensity={5} position={[0, 0, 0]} />
			
			<OrbitBox plain={ surface } radius={10} orbitSpeed={1} rotationSpeed={2} center={ orbitCenter } startPosition={ 1 }/>
			<OrbitBox plain={ surface } radius={10} orbitSpeed={1} rotationSpeed={2} center={ orbitCenter } startPosition={ 2 }/>
			<OrbitBox plain={ surface } radius={10} orbitSpeed={1} rotationSpeed={2} center={ orbitCenter } startPosition={ 3 }/>
			<OrbitBox plain={ surface } radius={10} orbitSpeed={1} rotationSpeed={2} center={ orbitCenter } startPosition={ 4 }/>
			<OrbitBox plain={ surface } radius={10} orbitSpeed={1} rotationSpeed={2} center={ orbitCenter } startPosition={ 5 }/>
			<OrbitBox plain={ surface } radius={10} orbitSpeed={1} rotationSpeed={2} center={ orbitCenter } startPosition={ 6 }/>
			<OrbitBox plain={ surface } radius={10} orbitSpeed={1} rotationSpeed={2} center={ orbitCenter } startPosition={ 7 }/>
			<OrbitBox plain={ surface } radius={10} orbitSpeed={1} rotationSpeed={2} center={ orbitCenter } startPosition={ 8 }/>
			<OrbitBox plain={ surface } radius={10} orbitSpeed={1} rotationSpeed={2} center={ orbitCenter } startPosition={ 9 }/>

			<OrbitBox plain={ surface } radius={15} orbitSpeed={-1} rotationSpeed={2} center={ orbitCenter } startPosition={ 1 }/>
			<OrbitBox plain={ surface } radius={15} orbitSpeed={-1} rotationSpeed={2} center={ orbitCenter } startPosition={ 2 }/>
			<OrbitBox plain={ surface } radius={15} orbitSpeed={-1} rotationSpeed={2} center={ orbitCenter } startPosition={ 3 }/>
			<OrbitBox plain={ surface } radius={15} orbitSpeed={-1} rotationSpeed={2} center={ orbitCenter } startPosition={ 4 }/>
			<OrbitBox plain={ surface } radius={15} orbitSpeed={-1} rotationSpeed={2} center={ orbitCenter } startPosition={ 5 }/>
			<OrbitBox plain={ surface } radius={15} orbitSpeed={-1} rotationSpeed={2} center={ orbitCenter } startPosition={ 6 }/>
			<OrbitBox plain={ surface } radius={15} orbitSpeed={-1} rotationSpeed={2} center={ orbitCenter } startPosition={ 7 }/>
			<OrbitBox plain={ surface } radius={15} orbitSpeed={-1} rotationSpeed={2} center={ orbitCenter } startPosition={ 8 }/>
			<OrbitBox plain={ surface } radius={15} orbitSpeed={-1} rotationSpeed={2} center={ orbitCenter } startPosition={ 9 }/>
		</Canvas>
	);
};

export default SummaryBackground;
