import React, {useState} from 'react';
import SideBar from '../components/Sidebar/Sidebar';
import projects from '../assets/projects.json';

function ProjectList() {
    return(
        <div>
            <SideBar items={Object.entries(projects.projects)}/>
        </div>
    )
}

export default ProjectList;