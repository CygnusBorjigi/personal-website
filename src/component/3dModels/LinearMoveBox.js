import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

const LinearMoveBox = ( props ) => {
	const mesh = useRef();
	const [time, setTime] = useState(0);

	const { plain, moveSpeed, rotationSpeed, color, xPos, yPos, startPos, range } = props;

	const calPosition = () => {
		if (plain === 'x') {
			mesh.current.position.y = (Math.sin(time) * range) + startPos;
			mesh.current.position.x = yPos;
			mesh.current.rotation.x = time * rotationSpeed;
		} else {
			mesh.current.position.z = Math.sin(time + startPos) * range;
			mesh.current.position.x = xPos;
			mesh.current.rotation.x = time * rotationSpeed;
			mesh.current.rotation.y = time * rotationSpeed;
		}
	};

	useFrame(() => {
		setTime(prev => prev + 0.001 * moveSpeed);
		calPosition();
	});

	return(
		<mesh ref={mesh}>
			<boxBufferGeometry attach='geometry' />
			<meshLambertMaterial attach='material' color={ color } />
		</mesh>
	);
};

export default LinearMoveBox;
