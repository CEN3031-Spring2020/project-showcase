import React, {useContext} from 'react';
import ProjectBox from '../components/ProjectBox/ProjectBox';
import bestProjects from '../assets/bestProjects.json';
import {ThemeContext} from "../App";

function Home() {
    const scheme = useContext(ThemeContext);
    return (
        <>
            <ProjectBox bestProjects={bestProjects}/>
            <div className='text-center w-full font-normal p-5'>
                     <span style={{fontSize: '12px', color: scheme.teamNameColor}}>
                        Site created by: Jonathan Conlin, Dakota Rennemann, and Shaila Patel
                     </span>
            </div>
        </>
    )
}

export default Home;