import React from 'react';
import rightArrow from './svgs/right-arrow.svg';
import { useNavigate } from 'react-router-dom';
import RingBox from './3dModels/BoxRings';

const Skill = () => {
	const navigate = useNavigate();
	const handelClick = () => {
		navigate('/');
	};
	return (
		<div>
			<div className="fixed right-0 mr-4 mt-4 h-8 w-8 z-10">
				<img src={ rightArrow } alt={ 'back button' } onClick={() => handelClick()} />	
			</div>
			<div className="">
				<div className='grid grid-cols-3'>
					<div className="border-2 border-gray-300 rounded-md p-4 m-8">
						<h1 className="text-center font-josefin text-4xl my-4">Programming Language</h1>
						<hr />
						<h1 className="text-center font-josefin text-xl my-2">Proficient In</h1>
						<h2 className="text-center font-zilla text-xl mt-2 mb-4">Python, JavaScript, Ocaml, SQL</h2>
						<hr />
						<h1 className="text-center font-josefin text-xl my-2">Fimilar With</h1>
						<h2 className="text-center font-zilla text-xl mt-2">Rust, PHP, Java</h2>
					</div>
					<div className="border-2 border-gray-300 rounded-md p-4 m-8">
						<h1 className="text-center font-josefin text-4xl my-4">FrameWorks</h1>
						<hr />
						<h1 className="text-center font-josefin text-xl my-2">Backend Development</h1>
						<h2 className="text-center font-zilla text-xl mt-2 mb-4">Express, Mongoose</h2>
						<hr />
						<h1 className="text-center font-josefin text-xl my-2">Frontend Development</h1>
						<h2 className="text-center font-zilla text-xl mt-2 mb-4">React.js, Redux.js</h2>
						<hr />
						<h1 className="text-center font-josefin text-xl my-2">Data Engineering</h1>
						<h2 className="text-center font-zilla text-xl mt-2">MongoDB, PostgreSQL</h2>
					</div>
					<div className="border-2 border-gray-300 rounded-md p-4 m-8">
						<h1 className="text-center font-josefin text-4xl my-4">Depolyment</h1>
						<hr />
						<h1 className="text-center font-josefin text-xl my-2">Services</h1>
						<h2 className="text-center font-zilla text-xl mt-2 mb-4">Digital Ocean, Heroku, MongoDB Atlas</h2>
						<hr />
						<h1 className="text-center font-josefin text-xl my-2">Environment</h1>
						<h2 className="text-center font-zilla text-xl mt-2">Ubuntu</h2>
					</div>
			</div>
			</div>
			<div className='fixed top-0 left-0 h-screen w-screen -z-10'>
				<RingBox surface={ 'xy' }/>
			</div>
		</div>
	);
};

export default Skill;
