import React from 'react';
import Slideshow from './Slideshow';
import {Slide} from "react-slideshow-image";
import './ProjectBox.css'


function ProjectBox({bestProjects}) {

    const slideProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: true
    }

    return(
        <div>
            {
                Object.values(bestProjects).map((project, i) => {
                    return(
                        <div key={project.id} className="project-card">
                            <div className="project-description">
                                {project.description}
                            </div>

                            <div className="project-slide">
                                <Slide {...slideProperties}>
                                    <div className="project-image">
                                        <img src={project.images[0]} alt="project picture" />
                                    </div>
                                    <div className="project-image">
                                        <img src={project.images[1]} alt="project picture" />
                                    </div>
                                    <div className="project-image">
                                        <img src={project.images[2]} alt="project picture" />
                                    </div>
                                </Slide>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectBox;