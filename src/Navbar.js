import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    const dogLinks = this.props.dogs.map((dog) => (
      <li className="nav-item" key={dog.name}>
        <NavLink exact to={`/dogs/${dog.name}`} className="nav-link">
          {dog.name}
        </NavLink>
      </li>
    ));

    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/dogs">
          Dog App
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/dogs" className="nav-link">
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
