import axios from "axios";

const BUGS_API_BASE_URL = "http://localhost:8081/api/v1/bugs";

class BugService {
  getAllBugs() {
    return axios.get(BUGS_API_BASE_URL);
  }

  saveBug(bug) {
    return axios.post(BUGS_API_BASE_URL, bug).then((response) => {
      if (response.data != null) {
        //   localStorage.setItem("task", response.data);
        alert("Bug Created Succesfully!");
      } else {
        alert("Bug cannot be created!!");
      }
    });
  }

  getBugById(taskid) {
    console.log(BUGS_API_BASE_URL + "/" + taskid);
    return axios.get(BUGS_API_BASE_URL + "/" + taskid);
  }

  updateBugDetails(taskid, bug) {
    return axios.put(BUGS_API_BASE_URL + "/" + taskid, bug).then((response) => {
      if (response.data != null) {
        alert("Bug Updated Succesfully!");
      } else {
        alert("Bug cannot be created!!");
      }
    });
  }

  deleteBug(taskid) {
    return axios.delete(BUGS_API_BASE_URL + "/" + taskid);
  }
}

export default new BugService();
