import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home";
import ProjectList from "./views/ProjectList"
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div style={{backgroundColor: '#424549'}}>
            <Navbar/>
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/Projects" component={ProjectList}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
}

export default App;