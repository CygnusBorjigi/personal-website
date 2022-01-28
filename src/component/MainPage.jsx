// import framework
import React, { useState, useRef } from 'react';

// import component
import ThreeCubeOrbit from './3dModels/ThreeCubeOrbit.js';
import TopNavBar from './bars/TopNavBars.jsx';
import RightSideBar from './bars/RightSideBar.jsx';
import LeftSideBar from './bars/LeftSideBar.jsx';
import BottomBar from './bars/BottomNavBar.jsx';

const MainPage = () => {
	return(
		<div className="w-screen h-screen fixed">
			<TopNavBar />
			<RightSideBar />
			<LeftSideBar />
			<h1 className="mt-40 text-center text-8xl font-josefin">Cygnus Wang</h1>
			<div className="static mt-0 w-3/5 h-3/5 mx-auto -z-50">
				<ThreeCubeOrbit />
			</div>
			<BottomBar />	
		</div>
	);
};

export default MainPage;
