import React from 'react';
import gitHub from '../svgs/github.svg';
import instagram from '../svgs/instagram.svg';

const BottomBar = () => {
	return (
		<div className="static bottom-4 w-screen h-8 flex flex-cols justify-center">
			<a href="https://github.com/CygnusBorjigin" className="h-8 w-8 mb-8"><img src={gitHub} alt={'github link'}/></a>
			<a href="https://www.instagram.com/cygnus__borjigin/" className="h-8 w-8 mb-8 ml-4"><img src={instagram} alt={'instagram link'} /></a>
		</div>
	);
}

export default BottomBar;
