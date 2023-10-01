import React, { Component } from "react";
import BugService from "../../../services/BugService";
import FooterComponent from "../../FooterComponent";
import HeaderComponent from "../../HeaderComponent";

class BugsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bugs: [],
    };
    this.addBug = this.addBug.bind(this);
    this.updateBug = this.updateBug.bind(this);
    this.deleteBug = this.deleteBug.bind(this);
  }

  componentDidMount() {
    BugService.getAllBugs().then((res) => {
      this.setState({ bugs: res.data });
      console.log(res.data);
    });
  }

  addBug() {
    this.props.history.push("/addbug");
  }

  updateBug(taskid) {
    this.props.history.push(`/updatebug/${taskid}`);
  }

  deleteBug(taskid) {
    BugService.deleteBug(taskid).then((res) => {
      alert(taskid + " deleted");
      this.setState({
        bugs: this.state.bugs.filter((bug) => bug.taskid !== taskid),
      });
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <br />
        <br />
        <div className="container bugtable mt-5">
          <h2 className="text-center">Task List</h2>
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
                        Update
                      </button>
                      <button
                        style={{ marginLeft: "15px" }}
                        className="btn btn-danger btn-sm"
                        onClick={() => this.deleteBug(bug.taskid)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <button className="btn btn-info" onClick={() => this.addBug()}>
              Add Task
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <FooterComponent />
      </div>
    );
  }
}

export default BugsList;
