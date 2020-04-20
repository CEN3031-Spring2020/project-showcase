import React, {useState} from 'react';
import SideBar from '../components/Sidebar/Sidebar';
import projects from '../assets/projects.json';

function ProjectList() {
    console.log(((Object.values(projects))[0][0].spring2020.projects[0].project1.groups[0]));

    return(
        <div>
            <div>
                <SideBar items={Object.entries(projects.projects)}/>
            </div>
            <div>
                    <h1>{(Object.values(projects))[0][0].spring2020.projects[0].project1.title}</h1>
                    <h4>{(Object.values(projects))[0][0].spring2020.projects[0].project1.description}</h4>
                    <h4>Advised by: {(Object.values(projects))[0][0].spring2020.projects[0].project1.TAs.join(", ")}</h4>

            {
                Object.values(projects).map( function(semester) {
                    console.log(semester.professor);
                    return(
                        <div>
                            <h2>{semester.professor}</h2>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ProjectList;