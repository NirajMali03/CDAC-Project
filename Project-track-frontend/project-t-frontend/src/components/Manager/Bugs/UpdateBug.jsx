import React, { Component } from "react";
import BugService from "../../../services/BugService";
import FooterComponent from "../../FooterComponent";
import HeaderComponent from "../../HeaderComponent";

class UpdateBug extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskid: this.props.match.params.bugid,
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
    //this.updateBug=this.updateBug.bind(this);
  }

  componentDidMount() {
    console.log(this.state.taskid);
    BugService.getBugById(this.state.taskid).then((res) => {
      let bug = res.data;
      this.setState({
        taskname: bug.taskname,
        projectid: bug.project.projectid,
        tasktype: bug.tasktype,
        status: bug.status,
        taskdesc: bug.taskdesc,
        comments: bug.comments,
      });
    });
  }

  /* updateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email };
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then( res =>{
                this.props.history.push('/list');
        });
    } */

  updateBug = (e) => {
    e.preventDefault();
    let bug = {
      project: { projectid: this.state.projectid },
      taskname: this.state.taskname,
      tasktype: this.state.tasktype,
      status: this.state.status,
      taskdesc: this.state.taskdesc,
      comments: this.state.comments,
    };
    console.log("bug =>" + JSON.stringify(bug));

    //console.log(JSON.stringify(localStorage.getItem("task")));

    BugService.updateBugDetails(this.state.taskid, bug).then((res) => {
      this.props.history.push("/bugslist");
    });
  };

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

  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="container">
          <div
            className="card col-md-6 offset-md-3 offset-md-3 shadow p-3 mb-5 bg-white rounded"
            style={{ marginTop: "50px" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <center>Update Task</center>
              </h5>
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
                      placeholder="Enter Bug Name"
                      value={this.state.taskname}
                      onChange={this.changetaskname}
                      required
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
                <div className="row">
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
                  onClick={this.updateBug}
                >
                  Update Task
                </button>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default UpdateBug;
