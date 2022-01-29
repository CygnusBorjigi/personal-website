// importing frameworks
import React  from 'react';
import { Canvas } from 'react-three-fiber';

// import component
import OrbitBox from './OrbitBox.js';

const CubeOrbit = () => {
	return(
		<Canvas camera={ { position:[0, 12, 0] } }>
			<pointLight color="white" intensity={5} position={[0, 0, 0]}  />
			<OrbitBox plain='xy' radius={6} orbitSpeed={1} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			<OrbitBox plain='xz' radius={6} orbitSpeed={1} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			<OrbitBox plain='yz' radius={6} orbitSpeed={1} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			
			<OrbitBox plain='xy' radius={6} orbitSpeed={-1} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			<OrbitBox plain='xy' radius={6} orbitSpeed={-1} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			<OrbitBox plain='xz' radius={6} orbitSpeed={-1} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			
			<OrbitBox plain='yz' radius={6} orbitSpeed={2} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			<OrbitBox plain='xz' radius={6} orbitSpeed={2} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			<OrbitBox plain='yz' radius={6} orbitSpeed={2} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
		
			<OrbitBox plain='xy' radius={6} orbitSpeed={3} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			<OrbitBox plain='xz' radius={6} orbitSpeed={3} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			<OrbitBox plain='yz' radius={6} orbitSpeed={3} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			
			<OrbitBox plain='xy' radius={6} orbitSpeed={-3} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			<OrbitBox plain='xy' radius={6} orbitSpeed={-3} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			<OrbitBox plain='xz' radius={6} orbitSpeed={-3} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			
			<OrbitBox plain='yz' radius={6} orbitSpeed={1.5} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			<OrbitBox plain='xz' radius={6} orbitSpeed={1.5} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
			<OrbitBox plain='yz' radius={6} orbitSpeed={1.5} rotationSpeed={2} color="#dce1e8" center={ 0 } startPosition = { 0 }/>
		</Canvas>
	)
}

export default CubeOrbit;
