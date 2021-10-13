import {
  getProjectList as httpGetProjectList,
  ProjectList,
} from "../repository/Project";

class ProjectService {
  private projectList: ProjectList;

  constructor() {
    httpGetProjectList().then((response) => {
      this.projectList = response.data;
    });
  }

  async getProjectList(): Promise<ProjectList> {
    return this.projectList;
  }
}

export default ProjectService;
