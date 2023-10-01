import React, { Component } from "react";
import BugService from "../../../services/BugService";
import FooterComponent from "../../FooterComponent";
import HeaderComponent from "../../HeaderComponent";

class Addbugtoproject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskname: "",
      projectid: "",
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
      this.props.history.push("/bugslist");
    });
  };

  render() {
    return (
      <div>
        <HeaderComponent />
        <br />
        <br />
        <div className="container">
          <div
            className="card col-md-6  offset-md-3 shadow p-3 mb-5 bg-white rounded"
            style={{ marginTop: "50px" }}
          >
            <div className="card-body">
              <h3 className="card-title">
                <center>Add New Task</center>
              </h3>
              <form>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label> </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Project Id"
                      value={this.state.projectid}
                      onChange={this.changeProjectid}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label> </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Task Name"
                      value={this.state.taskname}
                      onChange={this.changetaskname}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label> </label>
                    <select
                      id="inputState"
                      className="form-control"
                      value={this.state.tasktype}
                      onChange={this.changetasktype}
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
                    >
                      <option defaultValue>Choose Task Status</option>
                      <option>Assigned</option>
                      <option>OnTrack</option>
                      <option>Active</option>
                      <option>Pending</option>
                      <option>OhHold</option>
                      <option>Completed</option>
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
              <br />
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
        <br />
        <FooterComponent />
      </div>
    );
  }
}

export default Addbugtoproject;
