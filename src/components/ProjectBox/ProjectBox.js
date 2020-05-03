import React, {useContext} from 'react';
import {Slide} from "react-slideshow-image";
import './ProjectBox.css'
import {ThemeContext} from "../../App";


function ProjectBox({bestProjects}) {

    const slideProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: true
    };

    const scheme = useContext(ThemeContext);

    return (
        <div className='mt-10'>
            <div style={{'font-size': '24px', 'lineHeight': '12px', "text-shadow": "0 1px 2px rgba(0,0,0,0.47)"}}
                 className='italic text-center text-white font-medium mb-5'>
                <p style={{'color': scheme.homePageTitle}}>{bestProjects.title}</p>
                <p style={{'color': scheme.homePageProfessor}}>{bestProjects.professor}</p>
            </div>
            {
                Object.values(bestProjects.projects).map((project) => {
                    return (
                        <div>
                            <div key={project.id}
                                 className="p-3 m-10 project-card transition duration-300 ease-in-out border-transparent border border-solid hover:border-gray-400">
                                <div className="project-description pb-5 pr-5">
                                    <div className='pb-2' style={{fontSize: '24px', color: scheme.teamNameColor}}>
                                        {project.name}
                                    </div>
                                    {project.description}
                                </div>

                                <div className="project-slide">
                                    <Slide {...slideProperties}>
                                        {
                                            project.images.map((src) =>
                                                <div>
                                                    <img className="project-image" src={src} alt="project"/>
                                                </div>
                                            )
                                        }
                                    </Slide>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectBox;
