import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
            <div className="container-fluid">
                <img src="https://freepngimg.com/thumb/bear/89757-giant-head-bear-pandas-baby-logo-panda.png" width="30" height="24" alt="" />
                <a className="navbar-brand" href="#">NewsPanda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/national">National</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/world">World</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/hatke">Hatke</Link>
                    </li>
                </ul>
                </div>
                {/* <div className={`form-check form-switch text-${this.props.mode==='light'?'dark':'light'}`}>
                  <input onChange={this.props.toggler} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{this.props.mode==='dark'?'Disable':'Enable'} Dark Mode</label>
                </div> */}
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
