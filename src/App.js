import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home";
import ProjectBox from "./views/ProjectBox"
import NotFound from "./views/NotFound";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/Project" component={ProjectBox}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
}

export default App;