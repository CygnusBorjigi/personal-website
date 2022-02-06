import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import MainPage from './component/MainPage';
import Education from './component/Education';
import Experience from './component/Experience';
import Project from './component/Project';
import Skill from './component/Skill';
import Summary from './component/Summary';
import Contact from './component/Contact';
import PersonalProject from './component/PersonalProject';
import AboutThisWebsite from './component/AboutThisWebsite';

function App() {
  return (
	  <div>
	  	<Router>
	  		<Routes>
	  			<Route path='/' element={<MainPage />} exact />
	  			<Route path='/education' element={<Education />} exact />
	  			<Route path='/experience' element={<Experience />} exact />
	  			<Route path='/project' element={<Project />} exact />
	  			<Route path='/skill' element={<Skill />} exact />
	  			<Route path='/summary' element={<Summary />} exact />
	  			<Route path='/contact' element={<Contact />} exact />
	  			<Route path='/projects' element={<PersonalProject />} exact />
	  			<Route path='/about' element={<AboutThisWebsite />} exact />
	  		</Routes>
	  	</Router>
	  </div>
  );
}

export default App;
