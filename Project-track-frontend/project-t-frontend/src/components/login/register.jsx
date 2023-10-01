import React, { Component } from "react";
import { Navbar, Card } from "react-bootstrap";
import Employeeservice from "../../services/Employeeservice";
import FooterComponent from "../FooterComponent";
import { Link } from "react-router-dom";

class register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empid: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      role: "",
      securityQues: "",
      securityAns: "",
    };

    this.changeEmpid = this.changeEmpid.bind(this);
    this.changeFirstname = this.changeFirstname.bind(this);
    this.changeLastname = this.changeLastname.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeRole = this.changeRole.bind(this);
    this.changeSecurityQues = this.changeSecurityQues.bind(this);
    this.changesecurityAns = this.changesecurityAns.bind(this);
  }
  changeEmpid = (event) => {
    this.setState({ empid: event.target.value });
  };

  changeFirstname = (event) => {
    this.setState({ first_name: event.target.value });
  };

  changeLastname = (event) => {
    this.setState({ last_name: event.target.value });
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  changeRole = (event) => {
    this.setState({ role: event.target.value });
  };
  changeSecurityQues = (event) => {
    this.setState({ securityQues: event.target.value });
  };
  changesecurityAns = (event) => {
    this.setState({ securityAns: event.target.value });
  };

  saveEmployee = (b) => {
    b.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    var namecheck = /^[A-Za-z. ]{3,20}$/;
    var emailcheck = /^[A-Za-z._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/;
    var passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/;

    if (namecheck.test(firstname)) {
      document.getElementById("fname").innerHTML = " ";
      document.getElementById("firstname").style.borderColor = "green";
    } else if (firstname == "") {
      document.getElementById("fname").innerHTML = "Please fill the firstname";
      document.getElementById("firstname").style.borderColor = "red";
      return false;
    } else if (!isNaN(firstname)) {
      document.getElementById("fname").innerHTML = "Please enter characters";
      document.getElementById("firstname").style.borderColor = "red";
    } else if (firstname.length < 3 || firstname.length > 20) {
      document.getElementById("fname").innerHTML =
        "Name must be atleast 3 characters";
      document.getElementById("firstname").style.borderColor = "red";
    }

    if (namecheck.test(lastname)) {
      document.getElementById("lname").innerHTML = " ";
      document.getElementById("lastname").style.borderColor = "green";
    } else if (lastname == "") {
      document.getElementById("lname").innerHTML = "Please fill the lastname";
      document.getElementById("lastname").style.borderColor = "red";
      return false;
    } else if (!isNaN(lastname)) {
      document.getElementById("lname").innerHTML = "Please enter characters";
      document.getElementById("lastname").style.borderColor = "red";
    } else if (lastname.length <= 2 || lastname.length > 20) {
      document.getElementById("lname").innerHTML =
        "Name must be atleast 3 characters";
      document.getElementById("lastname").style.borderColor = "red";
      return false;
    }

    if (emailcheck.test(email)) {
      document.getElementById("ename").innerHTML = " ";
      document.getElementById("email").style.borderColor = "green";
    } else if (email == "") {
      document.getElementById("ename").innerHTML = "Please fill the email";
      document.getElementById("email").style.borderColor = "red";
      return false;
    } else if (email.indexOf("@") <= 0) {
      document.getElementById("ename").innerHTML =
        "Please enter valid Email ID";
      document.getElementById("email").style.borderColor = "red";
    } else if (
      email.charAt(email.length - 4) != "." &&
      email.charAt(email.length - 3) != "."
    ) {
      document.getElementById("ename").innerHTML =
        "Please enter valid Email ID";
      document.getElementById("email").style.borderColor = "red";
      return false;
    }

    if (passwordcheck.test(password)) {
      document.getElementById("pass").innerHTML = " ";
      document.getElementById("password").style.borderColor = "green";
    } else {
      document.getElementById("pass").innerHTML =
        "Password must contain 6-12 characters with at least one numeric digit, one uppercase and one lowercase letter";
      document.getElementById("password").style.borderColor = "green";
      return false;
    }

    if (password2.match(password)) {
      document.getElementById("pass2").innerHTML = " ";
    } else {
      document.getElementById("pass2").innerHTML = "Password is not matching";
      return false;
    }

    let employee = {
      project: { empid: this.state.empid },
      firstName: this.state.first_name,
      lastName: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
      securityQues: this.state.securityQues,
      securityAns: this.state.securityAns,
    };
    console.log("employee =>" + JSON.stringify(employee));
    Employeeservice.saveEmployee(employee).then((res) => {
      console.log(res);
      this.props.history.push("/");
      // .this.props.onClick.value("");
    });
  };

  render() {
    return (
      <div>
        {this.state.securityQues}
        <header>
          <div className="fixed-top bg-light">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <Navbar>
                  <Navbar.Brand href="/">
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
                  <ul class="navbar-nav mb-lg-0">
                    <li>
                      <li>
                        <li>
                          <li></li>
                        </li>
                      </li>
                    </li>
                    <li>
                      <li>
                        <li>
                          <li></li>
                        </li>
                      </li>
                    </li>
                    <li>
                      <li>
                        <li>
                          <li></li>
                        </li>
                      </li>
                    </li>
                    <li>
                      <li>
                        <li>
                          <li></li>
                        </li>
                      </li>
                    </li>
                    <li>
                      <li></li>
                    </li>
                    <li class="nav-item">
                      <Link
                        to={"/"}
                        className="nav-link btn btn-outline-success"
                      >
                        LogIn
                      </Link>
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

        <div className="container">
          <div
            className="card col-md-8  offset-md-2  shadow p-3 mb-5 bg-white rounded"
            style={{ marginTop: "90px" }}
          >
            <div className="card-body">
              <h3 className="card-title">
                <center>Registration </center>
              </h3>
              <form>
                <div className="row">
                  {/* <div className="form-group col-md-4">
                    <label>Enter Emp Id </label>
                    <input
                      type="text"
                      className="form-control"
                      id="emid"
                      placeholder="Enter Emp Id"
                      value={this.state.empid}
                      onChange={this.changeEmpid}
                    />
                    <span
                      id="empid"
                      class="text-danger font-weight-bold"
                    ></span>
                  </div> */}
                  <div className="form-group col-md-6">
                    <label>Enter First Name </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="Enter First Name"
                      value={this.state.first_name}
                      onChange={this.changeFirstname}
                    />
                    <span
                      id="fname"
                      class="text-danger font-weight-bold"
                    ></span>
                  </div>
                  <br />
                  <div className="form-group col-md-6">
                    <label>Enter Last Name </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="Enter Last Name"
                      value={this.state.last_name}
                      onChange={this.changeLastname}
                    />
                    <span
                      id="lname"
                      class="text-danger font-weight-bold"
                    ></span>
                  </div>
                  <br />
                  <div className="form-row" style={{ marginBottom: "15px" }}>
                    <label> </label>
                  </div>
                  <div className="form-group col-md-6">
                    <label> Choose Role </label>
                    <select
                      id="inputState"
                      className="form-control"
                      value={this.state.role}
                      onChange={this.changeRole}
                    >
                      <option defaultValue>Choose Role</option>
                      <option>DEVELOPER</option>
                      <option>PROJECT MANAGER</option>
                      <option>TESTER</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Enter Email </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email"
                      value={this.state.email}
                      onChange={this.changeEmail}
                    />
                    <span
                      id="ename"
                      class="text-danger font-weight-bold"
                    ></span>
                  </div>
                  <div className="form-row" style={{ marginBottom: "15px" }}>
                    <label> </label>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Enter Password </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.changePassword}
                    />
                    <span id="pass" class="text-danger font-weight-bold"></span>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Confirm Password </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password2"
                      placeholder="Confirm Password"
                    />
                    <span
                      id="pass2"
                      class="text-danger font-weight-bold"
                    ></span>
                  </div>
                  <div className="form-row" style={{ marginBottom: "15px" }}>
                    <label> </label>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Security Question </label>
                    <select
                      type="text"
                      className="form-control"
                      id="securityQues"
                      onChange={this.changeSecurityQues}
                    >
                      <option defaultValue>Select security Question</option>
                      <option value="Which was your favourite car?">
                        Which was your favourite car?
                      </option>
                      <option value="Which is your favourite movie?">
                        Which is your favourite movie?
                      </option>
                      <option value="Which is your favourite color?">
                        Which is your favourite color?
                      </option>
                    </select>
                    <span
                      id="securityQues"
                      class="text-danger font-weight-bold"
                    ></span>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Enter Answer </label>
                    <input
                      type="text"
                      className="form-control"
                      id="SecurityAns"
                      placeholder="Enter Your Answer"
                      onChange={this.changesecurityAns}
                    />
                    <span
                      id="SecurityAns"
                      class="text-danger font-weight-bold"
                    ></span>
                  </div>
                </div>
              </form>
              <br />
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success btn-lg"
                  onClick={this.saveEmployee}
                >
                  Register
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

export default register;
