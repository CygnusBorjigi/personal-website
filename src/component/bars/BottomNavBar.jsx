import React from 'react';
import gitHub from '../svgs/github.svg';
import instagram from '../svgs/instagram.svg';

const BottomBar = () => {
	return (
		<div className="static bottom-4 w-screen h-8 flex flex-cols justify-center">
			<img src={gitHub} alt={'github link'} className="mr-8"/>
			<img src={instagram} alt={'instagram link'} />
		</div>
	);
}

export default BottomBar;
