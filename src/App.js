import React, {createContext, useState} from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home";
import ProjectList from "./views/ProjectList"
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar/Navbar";
import schemes from './views/themes/themes';

export const ThemeContext = createContext(schemes.first);

const App = () => {
    const [_schemes, _setSchemes] = useState(localStorage.getItem('toggleState') ? JSON.parse(localStorage.getItem('toggleState')).currToggle ? schemes.second : schemes.first : schemes.first);

    return (
        <ThemeContext.Provider value={_schemes}>
            <div style={{backgroundColor: '#424549'}}>
                <Navbar schemes={schemes} setSchemes={_setSchemes}/>
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/">
                        <Redirect to="/Home" />
                    </Route>
                    <Route exact path="/Projects">
                        <ProjectList schemes={_schemes}/>
                    </Route>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </ThemeContext.Provider>
    );
};

export default App;