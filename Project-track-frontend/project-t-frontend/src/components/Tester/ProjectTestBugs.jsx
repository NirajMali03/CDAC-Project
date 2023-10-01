import React, { Component } from "react";
import { Link } from "react-router-dom";
import FetchProject from "../../services/FetchProject";
import FooterComponent from "../FooterComponent";
import { Navbar, Card } from "react-bootstrap";
import HeaderComponent from "../HeaderComponent";
class ProjectTestBugs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectid: this.props.match.params.projectid,
      currentuserid: JSON.parse(sessionStorage.getItem("user")),
      bugs: [],
    };
    this.addBug = this.addBug.bind(this);
    this.updateBug = this.updateBug.bind(this);
    //this.deleteBug = this.deleteBug.bind(this);
  }

  componentDidMount() {
    if (
      sessionStorage.getItem("user") === null ||
      sessionStorage.getItem("role") == "PROJECT MANAGER" ||
      sessionStorage.getItem("role") == null
    ) {
      window.location = "/";
    }

    FetchProject.getBugsForProject(this.state.projectid).then((res) => {
      this.setState({
        bugs: res.data,
      });
      console.log(res.data);
      console.log(this.state.currentuserid);
    });
  }

  addBug(projectid) {
    this.props.history.push(`/addtestbug/${projectid}`);
  }

  updateBug(taskid) {
    this.props.history.push(`/updatetestbug/${taskid}`);
  }

  /* deleteBug(bugid){
        BugService.deleteBug(bugid).then(res=>{
            alert(bugid+" deleted")
            this.setState({bugs:this.state.bugs.filter(bug => bug.bugid !== bugid)})
        })
    } */

  render() {
    return (
      <div>
        
        <br /> <br />
        <br />
        <br />
        <header>
          <div className="fixed-top bg-light">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
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
                  className="collapse navbar-collapse bg-dark"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="nav-item">
                      <Link
                        to={`/developerlogin/${this.state.currentuserid.empid}`}
                        className="nav-link"
                      >
                        Projects
                      </Link>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#faq"
                      >
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
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
            <div className="progress-container">
              <div className="progress-bar" id="myBar"></div>
            </div>
          </div>
        </header>
        <div className="container bugtable" style={{ fontFamily: "Raleway" }}>
          <h2 className="text-center">Task's List of tester</h2>

          <br />
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-lg h5">
              <thead>
                <tr>
                  <th>Task Name</th>
                  <th>Project Name</th>
                  <th>Task Type</th>
                  <th>Status</th>
                  <th>Description</th>
                  <th>Comments</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bugs.map((bug) => (
                  <tr key={bug.taskid}>
                    <td>{bug.taskname}</td>
                    {/* <td>{bug.project.projectid}</td> */}
                    <td>{bug.project.pname}</td>
                    <td>{bug.tasktype}</td>
                    <td>{bug.status}</td>
                    <td>{bug.taskdesc}</td>
                    <td>{bug.comments}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => this.updateBug(bug.taskid)}
                      >
                        Update Task
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <div className="text-center"><button className="btn btn-info" onClick={() => this.addBug(this.state.projectid)}>Add Bug</button></div> */}
        </div>
        <br />
        <br />
        <br />
        <FooterComponent />
      </div>
    );
  }
}

export default ProjectTestBugs;
