import { Project } from "../repository/Project";

const compareGroupName = (a: Project, b: Project): -1 | 1 | 0 => {
  const aType = a.type;
  if (
    aType === "4,5年生" ||
    aType === "部活" ||
    aType === "愛好会" ||
    aType === "有志"
  )
    return 0;
  const aGroupName = a.groupName;
  const bGroupName = b.groupName;
  const department = {
    M: 1,
    E: 2,
    J: 3,
    K: 4,
    C: 5,
  };
  if (a.type === "1年生" || a.type === "2年生") {
    if (bGroupName > aGroupName) {
      return -1;
    }
    return 1;
  }
  if (a.type === "3年生") {
    if (department[aGroupName[1]] < department[bGroupName[1]]) {
      return -1;
    }
    return 1;
  }
  return 0;
};

export default compareGroupName;
