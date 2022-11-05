import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid p-2">
          <NavLink className="navbar-brand" to="/">
            spa project
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={(activeData)=> activeData.isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={(activeData)=> activeData.isActive ? "nav-link active" : "nav-link"} to="/users">
                  users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={(activeData)=> activeData.isActive ? "nav-link active" : "nav-link"} to="/posts">
                  posts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
