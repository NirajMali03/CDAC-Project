import "./App.css";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Redirect, Switch, Route } from "react-router";
import { BrowserRouter as Routes } from "react-router-dom";

import register from "./components/login/register";
import Logincomponent from "./components/login/Logincomponent";
import WelcomeManager from "./components/Manager/WelcomeManager";
import ListEmployee from "./components/Manager/ListEmployee";
import ProjectsComponent from "./components/Manager/Projects/ProjectsComponent";
import AddProject from "./components/Manager/Projects/AddProject";
import AssignDeveloper from "./components/Manager/Projects/AssignDeveloper";
import AssignTester from "./components/Manager/Projects/AssignTester";
import EmployeeProjectList from "./components/Manager/Projects/EmployeeProjectList";
import BugsList from "./components/Manager/Bugs/BugsList";
import Addbugtoproject from "./components/Manager/Bugs/Addbugtoproject";
import UpdateBug from "./components/Manager/Bugs/UpdateBug";
import WelcomeDeveloper from "./components/Developer/WelcomeDeveloper";
import ProjectBugs from "./components/Developer/ProjectBugs";
import AddDevBug from "./components/Developer/AddDevBug";
import DevUpdate from "./components/Developer/DevUpdate";
import WelcomeTester from "./components/Tester/WelcomeTester";
import AddTestBug from "./components/Tester/AddTestBug";
import TestUpdate from "./components/Tester/TestUpdate";
import ProjectTestBugs from "./components/Tester/ProjectTestBugs";
import Forget from "./components/login/Forget";


/*function App() {

  componentDidMount() {
    const { history } = this.props;

    window.addEventListener("popstate", () => {
      history.go(1);
    });
  }

  return (
    <BrowserRouter>
    <Route exact path="/" component={Logincomponent} />
    <Route path="/register" component={register} />
    <Route path="/manager" component={WelcomeManager} />
    <Route path="/employeelist" component={ListEmployee}/>
    <Route path="/projects" component={ProjectsComponent}/>
    <Route path="/addproject" component={AddProject}/>
    <Route path="/assigndeveloper" component={AssignDeveloper}/> 
    <Route path="/assigntester" component={AssignTester}/>
    <Route path="/employeeproject" component={EmployeeProjectList}/>
    <Route path="/bugslist" component={BugsList}/>
    <Route path="/addbug" component={Addbugtoproject}/>
    <Route path="/updatebug/:bugid" component={UpdateBug}/>
    <Route path="/developerlogin/:empid" component={WelcomeDeveloper}/>
    <Route path="/projectbugs/:projectid" component={ProjectBugs}/>
    <Route path="/adddevbug/:projectid" component={AddDevBug} />
    <Route path="/updatedevbug/:bugid" component={DevUpdate}/>
    </BrowserRouter>
  );
}

export default App;*/

/*site key
6LcoEj4cAAAAAGpgJho5jDigmc_GFZXTRJ-Jaa05*/

/*secret key
6LcoEj4cAAAAAFNWvy8Y3qMhkTdrJMFoYcGamS1c*/

class App extends React.Component {
  componentDidMount() {
    const { history } = this.props;

    if(history){
     window.addEventListener("popstate", () => {
      history.go(1);
    });
    }
  }

  render() {
    return (
      <div>
     
      <Routes>
        <Route exact path="/" component={Logincomponent} />
        <Route path="/register" component={register} />
        <Route path="/manager" component={WelcomeManager} />
        <Route path="/employeelist" component={ListEmployee} />
        <Route path="/projects" component={ProjectsComponent} />
        <Route path="/addproject" component={AddProject} />
        <Route path="/assigndeveloper" component={AssignDeveloper} />
        <Route path="/assigntester" component={AssignTester} />
        <Route path="/employeeproject" component={EmployeeProjectList} />
        <Route path="/bugslist" component={BugsList} />
        <Route path="/addbug" component={Addbugtoproject} />
        <Route path="/updatebug/:bugid" component={UpdateBug} />
        <Route path="/developerlogin/:empid" component={WelcomeDeveloper} />
        <Route path="/projectbugs/:projectid" component={ProjectBugs} />
        <Route path="/adddevbug/:projectid" component={AddDevBug} />
        <Route path="/updatedevbug/:bugid" component={DevUpdate} />
        <Route path="/testerlogin/:empid" component={WelcomeTester} />
        <Route path="/projecttestbugs/:projectid" component={ProjectTestBugs} />
        <Route path="/addtestbug/:projectid" component={AddTestBug} />
        <Route path="/updatetestbug/:bugid" component={TestUpdate} />
        <Route path="/forget" component={Forget} />
      </Routes>
      </div>
    );
  }
}

export default App;
