import React from 'react';
import ProjectBox from '../components/ProjectBox/ProjectBox';
import bestProjects from '../assets/bestProjects.json';

function Home() {
    return <ProjectBox bestProjects={bestProjects}/>
}

export default Home;