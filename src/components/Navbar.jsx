import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Marketing</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/categories'>categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/cart'>cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/products'>products</NavLink>
        </li>
      </ul>
     <form className="d-flex gap-3" role="search">
  <button className="btn btn-outline-success" type="submit">Sign in</button>
  <button className="btn btn-outline-success" type="submit">Sign up</button>
</form>

    </div>
  </div>
</nav>

   </>
  )
}
