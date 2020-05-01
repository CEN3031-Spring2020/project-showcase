import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {ThemeContext} from "../../App";

const Navbar = ({schemes, setSchemes}) => {
    const [toggleColor, setToggleColor] = useState(localStorage.getItem('toggleState') ? JSON.parse(localStorage.getItem('toggleState')).currToggle : false);
    const [hover, setHover] = useState({
        button1: false,
        button2: false,
        button3: false,
        button4: false
    });

    useEffect(() => {
        if (toggleColor) {
            setSchemes(schemes.second);
        } else {
            setSchemes(schemes.first);
        }
        localStorage.setItem('toggleState', JSON.stringify({currToggle: toggleColor}));
    }, [toggleColor]);

    const scheme = useContext(ThemeContext);

    const style = {
        button1: {
            backgroundColor: hover.button1 ? scheme.buttonHoverColor : scheme.buttonColor,
            color: scheme.buttonTextColor
        },
        button2: {
            backgroundColor: hover.button2 ? scheme.buttonHoverColor : scheme.buttonColor,
            color: scheme.buttonTextColor
        },
        button3: {
            backgroundColor: hover.button3 ? scheme.buttonHoverColor : scheme.buttonColor,
            color: scheme.buttonTextColor
        },
        button4: {
            backgroundColor: hover.button4 ? scheme.buttonHoverColor : scheme.buttonColor,
            color: scheme.buttonTextColor
        },
    };

    function doHover(idx) {
        hover[Object.keys(hover)[idx]] = true;
        return Object.assign({}, hover);
    }

    function doUnhover(idx) {
        hover[Object.keys(hover)[idx]] = false;
        return Object.assign({}, hover);
    }

    return (
        <div className="header">
            {/* Logo */}
            {/*<Link className="nav-link" style={style.button1} onMouseEnter={() => setHover(doHover(0))}
                  onMouseLeave={() => setHover(doUnhover(0))} to="/">
                CEN 3031
            </Link>
            <div className='ml-3 cursor-pointer nav-link' style={style.button2}
                 onMouseEnter={() => setHover(doHover(1))} onMouseLeave={() => setHover(doUnhover(1))}
                 onClick={() => setToggleColor(!toggleColor)}>
                Swap Color Scheme
            </div>*/}

            {/* Page Links */}
            <div className="nav-items">
                <Link className="nav-link" style={style.button3} onMouseEnter={() => setHover(doHover(2))}
                      onMouseLeave={() => setHover(doUnhover(2))}
                      to='/Home'>Home</Link>

                <Link className="ml-3 nav-link" style={style.button4} onMouseEnter={() => setHover(doHover(3))}
                      onMouseLeave={() => setHover(doUnhover(3))}
                      to='/Projects'>Projects</Link>
            </div>
        </div>
    )
};

export default Navbar;