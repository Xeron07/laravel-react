import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import List from "./list";
import AddInfo from "./addInfo";
import Profile from "./profile";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <nav
          className="navbar navbar-expand-sm "
          style={{ backgroundColor: "#6D214F" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/addInfo"
              >
                Add Person
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/list">
                List
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/api/person">
                Api Test
              </a>
            </li>
          </ul>
        </nav>
        <br></br>
        <Switch>
          <Route path="/" component={List} exact></Route>
          <Route path="/addInfo" component={AddInfo} exact></Route>
          <Route path="/list" component={List} exact></Route>
          <Route path="/profile/:id" component={Profile} exact></Route>
        </Switch>
      </div>
    );
  }
}

export default NavBar;
