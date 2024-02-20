import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const handleLogout = () => {
    localStorage.removeItem("user")
  }


  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Navbar</span>
    </div>
    </nav>
  )
}

export default Header
