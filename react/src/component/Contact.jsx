import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rightArrow from './svgs/right-arrow.svg';
import AboutPageBackground from './3dModels/AboutPageBackground';
import emailjs from 'emailjs-com';
import { v4 as uuidv4 } from 'uuid';
import{ init } from '@emailjs/browser';
init("user_eSBZJchAoqrFmUubLV5Vl");	

const Contact = () => {
	const [uName, setUName] = useState("");
	const [uEmail, setUEmail] = useState("");
	const [message, setMessage] = useState("");
	const navigate = useNavigate();
	const handelClick = () => {
		navigate('/');
	};

	const handelChangeName = ( event ) => { setUName(event.target.value) };
	const handelChangeEmail = ( event ) => { setUEmail(event.target.value) };
	const handelChangeMessage = ( event ) => {setMessage( event.target.value )};

	const sendMessage = async () => {
		try {
			console.log("send message clicked");
			await emailjs.send(
					"service_krkws8w",
					"template_f7clfsb",
					{
						subject: "Personal Website",
						name: uName,
						contact: uEmail,
						message: message
					},
					"user_eSBZJchAoqrFmUubLV5Vl"
			);
			setUName("");
			setUEmail("");
			setMessage("Thank you, I'll reply ASAP.");
			console.log("message send");

		} catch (err) {
			console.log(err);
		}
	};

	return(
		<div>
			<div className="fixed right-0 mr-4 mt-4 h-8 w-8 z-10">
				<img src={ rightArrow } alt={ 'back button' } onClick={() => handelClick()} />	
			</div>
			<div className="flex flex-col justify-center">
				<h1 className="text-2xl font-josefin w-2/3 mx-auto text-center mt-40">How may I address you?</h1>
				<input 
					type="text" 
					placeholder="Prefered Name" 
					className="mt-10 w-1/3 mx-auto text-center font-zilla text-gray-500 border-2 border-gray-200 focus:outline-gray-500 rounded-md"
					value={ uName }
					onChange={ handelChangeName }
				/>
				<h1 className="text-2xl font-josefin w-2/3 mx-auto text-center mt-16">How may I reply to you?</h1>
				<input 
					type="text" 
					placeholder="Email / Social Media" 
					className="mt-10 w-1/3 mx-auto text-center font-zilla text-gray-500 border-2 border-gray-200 focus:outline-gray-500 rounded-md"
					value={ uEmail }
					onChange={ handelChangeEmail }
				/>
				<h1 className="text-2xl font-josefin w-2/3 mx-auto text-center mt-16">I'm all ears</h1>
				<textarea
					type="text" 
					className="mt-5 w-1/3 mx-auto text-center font-zilla text-gray-500 border-2 border-gray-200 focus:outline-gray-500 rounded-md h-40"
					value={ message }
					onChange={ handelChangeMessage }
				/>
				<button 
					className="border-2 border-gray-300 hover:bg-gray-300 rounded-md mt-10 w-16 mx-auto font-cormorant"
					onClick={ sendMessage }
				>Send</button>
			</div>
			<div className='fixed top-0 left-0 h-screen w-screen -z-10'>
				<AboutPageBackground />
			</div>
		</div>
	);
};

export default Contact;
