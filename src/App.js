import { NavLink, Outlet } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className='App'>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink style={({ isActive }) => isActive ? { borderRadius: '5px' } : {}} className={(props) => props.isActive ? ' nav-link bg-light text-dark' : 'nav-link'} to="/">Home <span className="visually-hidden">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({ isActive }) => isActive ? { borderRadius: '5px' } : {}} className={({ isActive }) => isActive ? ' nav-link bg-light text-dark' : 'nav-link'} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({ isActive }) => isActive ? { borderRadius: '5px' } : {}} className={({ isActive }) => isActive ? ' nav-link bg-light text-dark' : 'nav-link'} to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({ isActive }) => isActive ? { borderRadius: '5px' } : {}} className={({ isActive }) => isActive ? ' nav-link bg-light text-dark' : 'nav-link'} to="/reactform">React Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({ isActive }) => isActive ? { borderRadius: '5px' } : {}} className={({ isActive }) => isActive ? ' nav-link bg-light text-dark' : 'nav-link'} to="/lifecycle">React Lifecycle</NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="demonumber">Demo number</NavLink>
                <NavLink className="dropdown-item" to="demochonxe">Demo Chọn Xe</NavLink>
                <NavLink className="dropdown-item" to="demoformcomment">Demo Form Comment</NavLink>
                <NavLink className="dropdown-item" to="demoburger">Demo Burger</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bài Tập React</NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="baitapreactbuoi2">Bài Tập React Buổi 2</NavLink>
                {/* {/* <NavLink className="dropdown-item" to="demochonxe">Demo Chọn Xe</NavLink> */}
                <NavLink className="dropdown-item" to="baitapform">Bài Tập Form</NavLink>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {/* Vị trí component sẽ được load ở link con */}
      <Outlet />
    </div>
  );
}

export default App;
