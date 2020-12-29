import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Tempapp from './weatherinfo/weatherHome';
import TodoList from './Todoapp/TodoList'
class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path = "/" exact>
                            <Tempapp />
                        </Route>
                        <Route path = "/todoapp" exact>
                            <TodoList />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Routes;