import React from 'react';
import ProjectBox from '../components/ProjectBox/ProjectBox';
import bestProjects from '../assets/bestProjects.json';

function Home() {

    return(
        <div>
            <ProjectBox bestProjects={bestProjects.projects[0]}/>
        </div>
    )
}

export default Home;