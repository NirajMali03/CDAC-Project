import React, { Component } from "react";
import { Navbar, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import FetchProject from "../services/FetchProject";

export default function HeaderComponent() {
  const endSession = () => {
    sessionStorage.removeItem("user");
    localStorage.removeItem("role");
    window.location = "/";
  };

  return (
    <div>
     
      <header>
        <div className="fixed-top bg-light">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <Navbar>
                <Navbar.Brand>
                  <img
                    alt=""
                    src="images\log.jpg"
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                  />{" "}
                  Project Tracking
                </Navbar.Brand>
              </Navbar>
              <div
                class="collapse navbar-collapse bg-dark"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to={"/employeelist"} className="nav-link">
                      Employees
                    </Link>
                  </li>
                  <li class="nav-item">
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/projects">
                        Projects List
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/employeeproject">
                        Alloted Projects
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/assigndeveloper">
                        Assign a Developer
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/assigntester">
                        Assign a Tester
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <li class="nav-item">
                    <NavDropdown title="Tasks" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/bugslist">
                        Tasks List
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#faq">
                      Services
                    </a>
                  </li> */}
                  <li class="nav-item">
                    <button
                      className="nav-link btn btn-outline-danger"
                      onClick={endSession}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="progress-container">
            <div class="progress-bar" id="myBar"></div>
          </div>
        </div>
      </header>
    </div>
  );
}
