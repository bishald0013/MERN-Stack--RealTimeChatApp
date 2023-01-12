import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div class="container mt-4">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link to="/" className="nav-link active">
            <img
              src="/images/logo.png"
              alt="logo not found"
              className="image_container"
              style={{width: "3.5rem"}}
            />
             <span className="mx-3">Let's chat</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
