import React, { Component } from "react";
import Employeeservice from "../../services/Employeeservice";
import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";

class ListEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    /* If you need to load data from a remote endpoint here java, 
        this is a good place to instantiate the network request.
        componentDidMount() is invoked immediately after a component is mounted */
    if (
      sessionStorage.getItem("role") != "PROJECT MANAGER" ||
      sessionStorage.getItem("user") == null
    ) {
      window.location = "/";
    }
    Employeeservice.getAllEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  render() {
    return (
      <div>
        <HeaderComponent/>
        <br />

        <div className="container mt-5">
          <h2 className="text-center" style={{ marginBottom: "30px" }}>
            Employees List
          </h2>

          <div className="table-responsive ">
            <table className="table table-bordered table-striped table-lg h5 ">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee) => (
                  <tr key={employee.empid}>
                    <td>{employee.empid}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <br />
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default ListEmployee;
