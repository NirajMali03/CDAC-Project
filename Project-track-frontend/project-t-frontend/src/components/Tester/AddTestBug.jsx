import React, { Component } from "react";
import BugService from "../../services/BugService";
import { Link } from "react-router-dom";
import HeaderComponent from "../HeaderComponent";
class AddTestBug extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskname: "",
      projectid: this.props.match.params.projectid,
      tasktype: "",
      status: "",
      taskdesc: "",
      comments: "",
    };

    this.changetaskname = this.changetaskname.bind(this);
    this.changeProjectid = this.changeProjectid.bind(this);
    this.changetasktype = this.changetasktype.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
    this.changeComments = this.changeComments.bind(this);
  }
  changetaskname = (event) => {
    this.setState({ taskname: event.target.value });
  };

  changeProjectid = (event) => {
    this.setState({ projectid: event.target.value });
  };

  changetasktype = (event) => {
    this.setState({ tasktype: event.target.value });
  };

  changeStatus = (event) => {
    this.setState({ status: event.target.value });
  };

  changeDesc = (event) => {
    this.setState({ taskdesc: event.target.value });
  };

  changeComments = (event) => {
    this.setState({ comments: event.target.value });
  };

  saveBug = (b) => {
    b.preventDefault();
    let bug = {
      project: { projectid: this.state.projectid },
      taskname: this.state.taskname,
      tasktype: this.state.tasktype,
      status: this.state.status,
      taskdesc: this.state.taskdesc,
      comments: this.state.comments,
    };
    console.log("bug =>" + JSON.stringify(bug));
    BugService.saveBug(bug).then((res) => {
      console.log(res);
      this.props.history.push(`/projectbugs/${this.state.projectid}`);
    });
  };
  render() {
    return (
      <div>
        
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/manager"} className="navbar-brand">
              <img
                alt=""
                src="/images/log.jpg"
                width="35"
                height="35"
                className="d-inline-block align-top"
              />{" "}
              Project Tracking
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav"></div>

            <div className="navbar-right">
              {/* <Link to={"/"} className="nav-link btn btn-outline-danger">
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
            </div>
          </nav>
        </header> 
        <div className="container" style={{ fontFamily: "Raleway" }}>
          <div
            className="card col-md-6 col-md-6 offset-md-3 offset-md-3 shadow p-3 mb-5 bg-white rounded"
            style={{ marginTop: "50px" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <center>Add New Task</center>
              </h5>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label> </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Project Id"
                      value={this.state.projectid}
                      onChange={this.changeProjectid}
                      disabled
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label> </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Bug Name"
                      value={this.state.taskname}
                      onChange={this.changetaskname}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label> </label>
                    <select
                      id="inputState"
                      className="form-control"
                      value={this.state.tasktype}
                      onChange={this.changetasktype}
                      required
                    >
                      <option defaultValue>Choose Task Type</option>
                      <option>Functional</option>
                      <option>Performance</option>
                      <option>Usability</option>
                      <option>Compatibility</option>
                      <option>Security</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label> </label>
                    <select
                      id="inputState"
                      className="form-control"
                      value={this.state.status}
                      onChange={this.changeStatus}
                      required
                    >
                      <option defaultValue>Choose Task Status</option>
                      <option>Assigned</option>
                      <option>Open</option>
                      <option>Fixed</option>
                      <option>Pending Retest</option>
                      <option>Retest</option>
                      <option>Closed</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label> </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Comments"
                      value={this.state.comments}
                      onChange={this.changeComments}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label> </label>
                  <textarea
                    className="form-control"
                    placeholder="Enter Project Description"
                    value={this.state.taskdesc}
                    onChange={this.changeDesc}
                  />
                </div>
              </form>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.saveBug}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTestBug;
