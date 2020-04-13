import React, {useState} from 'react';
import ProjectBox from '../components/ProjectBox/ProjectBox';
import bestProjects from '../assets/bestProjects.json';

function Home() {
    const [projectData, setProjectData] = useState(bestProjects.projects[0]);

    return(
        <div>
            <ProjectBox bestProjects={projectData}/>
        </div>
    )
}

export default Home;