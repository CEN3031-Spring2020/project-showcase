import React, {useEffect, useState} from 'react';
import SideBar from '../components/Sidebar/Sidebar';
import projects from '../assets/projs.json';
import '../css/tailwind.css';

function getSemesters() {
    let semesters = projects.semesters;
    semesters.sort((sem1, sem2) => {
        if (!sem2) return true;

        const sem1Attr = sem1.semester.split(" ");
        const sem2Attr = sem2.semester.split(" ");
        const semesters = {
            "1": {
                season: sem1Attr[0],
                year: parseInt(sem1Attr[1])
            },
            "2": {
                season: sem2Attr[0],
                year: parseInt(sem2Attr[1])
            }
        };

        if (semesters['1'].year > semesters['2'].year)
            return -1;
        else if (semesters['1'].year === semesters['2'].year)
            return (semesters['2'].season === "Spring" || semesters["1"].season === "Fall") ? -1 : 1; // if semester 2 is spring or semester 1 is fall, then we want to sort semester 1 higher

        return 1;
    });
    return [...semesters];
}

function ProjectList() {

    return (
        <>
            <SideBar items={projects}/>
            <div style={{overflow: "hidden"}}>
                <div style={{
                    width: 'calc(100vw - 240px)',
                    marginLeft: '240px',
                    marginTop: '73.25px',
                    overflow: "hidden"
                }}>
                    {
                        getSemesters().map(sem => <Semester data={sem}/>)
                    }
                </div>
            </div>
        </>
    );
}

const Semester = (props) => {
    return (
        <div style={{
            'backgroundColor': '#1e2124', 'maxWidth': '75%', 'marginLeft': '12%',
            'marginRight': '2em',
            'marginTop': '2em',
            'color': 'white',
            'paddingTop': '0.05em'
        }}>

            <h1 style={{'text-align': 'center', "text-shadow": "0 1px 2px #000"}}>{props.data.semester}</h1>
            <Projects projects={props.data.projects} semester={props.data.semester}/>
        </div>
    );
};

const Projects = (props) => {
    const [projs, setProjects] = useState({});
    useEffect(() => {
        const projs = {};
        props.projects.forEach(curr => {
            if (projs[curr["project-name"]])
                projs[curr['project-name']].push(curr);
            else
                projs[curr['project-name']] = [curr];
        });
        setProjects(projs);
    }, []);

    return (
        <>
            {
                Object.keys(projs).length > 0 ? Object.keys(projs).map(key => <Project
                    name={key} semester={props.semester} description={projs[key][0]['description']}
                    data={projs[key]}/>) : null
            }
        </>
    )
};

const Project = (props) => {
    const hrStyle = {
        'border': 0,
        'height': '1px',
        'background-image': 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(9, 211, 172, 0.75), rgba(0, 0, 0, 0))'
    };

    const onClick = (e) => {

    };

    return (
        <>
            <div style={{
                'display': 'block',
                'backgroundColor': '#282b30',
                'padding': '20px',
                'color': '#09D3AC',
                "text-shadow": "0 1px 2px rgba(0,0,0,0.4)"
            }}>
                <h2 id={props.semester + props.name}><span style={{'color': 'white', 'line-height': '0px'}}>Project Name:</span> {props.name}
                </h2>
                <h4><span style={{'color': 'white', 'fontWeight': 'bold'}}>Description: </span>{props.description}</h4>
                {
                    props.data.map(proj => {
                        return <div style={{'color': 'white'}}>
                            <div style={{'textIndent': '2.5em', 'lineHeight': '0.3em', 'marginTop': '2.5em'}}>
                                Teaching Assistants:
                                <div style={{'textIndent': '3em', 'lineHeight': '1.5em'}}>
                                    <ul>
                                        {
                                            proj.tas.map(ta => <li>{ta}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div style={{'textIndent': '2.5em'}}>
                                Group Members:
                                <div style={{'textIndent': '3em', 'lineHeight': '1.5em'}}>
                                    <ul>
                                        {
                                            proj.members.map(member => <li>{member}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div style={{
                                'width': '100%',
                                'text-align': 'center',
                                'display': 'grid',
                                'marginTop': '2em',
                                'grid-template-columns': '33% 33% 33%',
                                'grid-gap': '0.5em',
                                'overflow': 'hidden'
                            }}>
                                {
                                    proj.images.map(image => <img src={image} className='border-0 hover:'
                                                                  style={{'width': '100%'}}
                                                                  alt='Not found.'/>)
                                }
                            </div>
                            <br/>
                            <hr style={hrStyle}/>
                        </div>
                    })
                }
            </div>
        </>
    )
};

export default ProjectList;
