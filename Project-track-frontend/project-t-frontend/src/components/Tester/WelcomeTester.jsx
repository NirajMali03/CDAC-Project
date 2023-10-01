import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Card } from "react-bootstrap";
import FetchProject from "../../services/FetchProject";
import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";
class WelcomeTester extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empid: this.props.match.params.empid,
      ename: "",
      projectid: "",
      projectname: "",
      technology: "",
      projdesc: "",
      startdate: "",
      finishdate: "",
    };
    this.viewBugs = this.viewBugs.bind(this);
  }

  componentDidMount() {
    // console.log("Helloooo..");
    // console.log(sessionStorage.getItem("user"));
    if (
      sessionStorage.getItem("user") === null ||
      sessionStorage.getItem("role") == "PROJECT MANAGER" ||
      sessionStorage.getItem("role") == null
    ) {
      window.location = "/";
    }

    console.log(this.state.empid);
    FetchProject.getProjectForEmployee(this.state.empid).then((response) => {
      let employee = response.data;
      console.log(employee);
      this.setState({
        empid: employee.empid,
        ename: employee.ename,
        projectid: employee.project.projectid,
        projectname: employee.project.pname,
        technology: employee.project.technology,
        projdesc: employee.project.pdesc,
        startdate: employee.startdate,
        finishdate: employee.finishdate,
      });
    });
  }

  viewBugs(projectid) {
    this.props.history.push(`/projecttestbugs/${projectid}`);
  }
  render() {
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
                      src="/images/log.jpg"
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
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li class="nav-item">
                      <Link
                        className="nav-link"
                        onClick={() => this.viewBugs(this.state.projectid)}
                      >
                        View Tasks
                      </Link>
                    </li>

                    {/* <li class="nav-item">
                      <a
                        class="nav-link active"
                        aria-current="page"
                        href="#faq"
                      >
                        Services
                      </a>
                    </li> */}
                    <li class="nav-item">
                      {/* <Link
                        to={"/"}
                        className="nav-link btn btn-outline-danger"
                      >
                        Logout
                      </Link> */}
                      <button
                        className="nav-link btn btn-outline-danger"
                        onClick={() => {
                          sessionStorage.removeItem("user");
                          sessionStorage.removeItem("role");
                          window.location = "/";
                        }}
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
        <br />
        <br />

        <div>
          <h2 style={{ marginTop: "60px" }}>
            {" "}
            Welcome Tester :{this.state.ename}
          </h2>
        </div>
        <div style={{ fontFamily: "Raleway" }}>
          <div
            className="card col-md-6 offset-md-3 offset-md-3 shadow p-3 mb-5 bg-white rounded"
            style={{ marginTop: "60px" }}
          >
            <h3
              className="text-center"
              style={{ marginTop: "25px", marginBottom: "25px" }}
            >
              {this.state.ename}'s <br /> Alloted Project
            </h3>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <label>
                    <b>Employee Id : </b>
                    {this.state.empid}
                  </label>
                </div>
                <div className="col">
                  <label>
                    <b>Employee Name : </b>
                    {this.state.ename}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>
                    <b>Alloted Project Id : </b>
                    {this.state.projectid}
                  </label>
                </div>
                <div className="col">
                  <label>
                    <b>Alloted Project Name : </b>
                    {this.state.projectname}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>
                    <b>Start Date : </b>
                    {this.state.startdate}
                  </label>
                </div>
                <div className="col">
                  <label>
                    <b>Due Date : </b>
                    {this.state.finishdate}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>
                    <b>Technology : </b>
                    {this.state.technology}
                  </label>
                </div>
                <div className="col">
                  <label>
                    <b>Project Description : </b>
                    {this.state.projdesc}
                  </label>
                </div>
              </div>
            </div>
            <div
              className="text-center"
              style={{ marginBottom: "30px", marginTop: "25px" }}
            >
              <button
                type="submit"
                class="btn btn-success"
                onClick={() => this.viewBugs(this.state.projectid)}
              >
                {" "}
                View Tasks{" "}
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />

        <FooterComponent />
      </div>
    );
  }
}

export default WelcomeTester;
