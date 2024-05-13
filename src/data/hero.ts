export const heroData = {
  name: "Tran Van Hoan",
  skills: [
    "React",
    "NextJS",
    "Redux",
    "PHP",
    "Laravel",
    "Angular",
    "MySql",
    "Docker",
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return this.hardWorker && this.problemSolver && this.skills.length >= 5;
  },
};
