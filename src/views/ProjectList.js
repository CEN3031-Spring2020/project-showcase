import React, {useContext, useEffect, useState} from 'react';
import SideBar from '../components/Sidebar/Sidebar';
import projects from '../assets/projs.json';
import '../css/tailwind.css';
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import {makeStyles} from "@material-ui/core/styles";
import {ThemeContext} from "../App";

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
    const scheme = useContext(ThemeContext);
    return (
        <div style={{
            'backgroundColor': '#1e2124', 'maxWidth': '75%', 'marginLeft': '12%',
            'marginRight': '2em',
            'marginTop': '2em',
            'color': scheme.semesterTitleColor,
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
                Object.keys(projs).length > 0 ? Object.keys(projs).map(key => <Project name={key} semester={props.semester} description={projs[key][0]['description']} data={projs[key]}/>) : null
            }
        </>
    )
};

const Project = (props) => {
    const scheme = useContext(ThemeContext);
    const hrStyle = {
        'border': 0,
        'height': '1px',
        'background-image': scheme.projectHRColor
    };

    return (
        <>
            <div style={{
                'display': 'block',
                'backgroundColor': '#282b30',
                'padding': '20px',
                'color': scheme.projectDescText,
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
                                'grid-template-columns': '33.3333% 33.3333% 33.3333%',
                                'grid-gap': '0.5em',
                            }} className='justify-center'>
                                {
                                    proj.images.map(image => <Image image={image}/>)
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

const Image = ({image}) => {
    const [open, setOpen] = useState(false);

    return <>
        <img onClick={() => setOpen(!open)}
             className='w-full overflow-visible transition duration-300 ease-in-out cursor-pointer border-transparent border border-solid hover:border-gray-400'
             src={image}
             alt='Not found.'/>
        <div className='absolute'>
            <TransitionsModal toggleState={open} image={image} setToggle={setOpen}/>
        </div>
    </>;
};

function TransitionsModal({toggleState, image, setToggle}) {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setToggle(false);
    };

    useEffect(() => {
        setOpen(toggleState);
    }, [toggleState]);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className='flex items-center justify-center'
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className='focus:outline-none shadow-xl'>
                        <img
                            className='transition duration-1000 ease-in-out border-transparent border border-solid border-t-0 border-l-0 border-r-0 hover:border-gray-400 w-full h-full'
                            src={image}/>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default ProjectList;
