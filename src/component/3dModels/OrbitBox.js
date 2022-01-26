import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

const OrbitBox = ( props ) => {
	const mesh = useRef();
	const [time, setTime] = useState(0);
	const { plain, radius, orbitSpeed, rotationSpeed, color, center } = props;
	const calPosition = () => {
		if (plain === 'xy') {
			mesh.current.position.x = Math.sin(time) * radius;
			mesh.current.position.y = Math.cos(time) * radius;
			mesh.current.position.z = center;
					
		} else if ( plain === 'xz'  ) {
			mesh.current.position.x = Math.sin(time) * radius;
			mesh.current.position.z = Math.cos(time) * radius;
			mesh.current.position.y = center;
					
		} else {
			mesh.current.position.y = Math.sin(time) * radius;
			mesh.current.position.z = Math.cos(time) * radius;
			mesh.current.position.x = center;
					
		}
			
	};
	const calRotation = () => {
		mesh.current.rotation.x = time * rotationSpeed;
		mesh.current.rotation.y = time * rotationSpeed;
	};
	useFrame(() => {
		setTime(prev =>  prev + 0.01 * orbitSpeed);
		calPosition();
		calRotation();
	})
	return(
		<mesh ref={mesh}>
			<boxBufferGeometry attach='geometry' />
			<meshLambertMaterial attach='material' color={ color } />
		</mesh>
			
	);
};

export default OrbitBox;
